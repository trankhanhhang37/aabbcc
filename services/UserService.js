"use strict"

const  errorResponse  = require('../core/error.response')
const bcrypt = require('bcrypt')
const   userRepository = require('../models/repositories/user.repo')
const { GeneratePassword, createToken, getInfoData } = require('../utils');
const crypto = require('crypto');
const keyTokenService = require('./KeyTokenService');
const { sendEmailToken } = require('./EmailService');
const UserModel  = require('../models/UserModel');
const { checkEmailToken, newOtp } = require('./OtpService');
const jwt = require("jsonwebtoken");

class UserService {
    constructor() {
        this.repository = new userRepository();
    }
    async login({ user_email, user_password, refreshToken = null }) {
        const foundUser = await this.repository.findByEmail(user_email)
        if (!foundUser) {
            throw new errorResponse.ForbiddenRequestError("auth err")
        }

        const match = bcrypt.compare(user_password, foundUser.user_password)
        if (!match) {
            throw new errorResponse.ForbiddenRequestError("auth err not math")
        }
        const publicKey = await crypto.randomBytes(64).toString('hex')
        const privateKey = await crypto.randomBytes(64).toString('hex')

        const tokens = await createToken({ userId: foundUser._id, user_email }, publicKey, privateKey)
        await keyTokenService.createKeyToken({ userId: foundUser._id, refreshToken: tokens.refreshToken, publicKey, privateKey })
        const user = await getInfoData({ fileds: ['_id', 'user_name', 'user_email', 'user_phone', 'user_sex', 'user_avatar', 'user_date_of_birth', 'user_provider'], object: foundUser })
        return {
            user,
            tokens
        }
    }

    async signUp({ user_email, user_name, user_password, captcha = null }) {

        const hodeluser = await this.repository.findByEmail(user_email)
        if (hodeluser) {
            return {
                code: 201,
                message: "user already registered"
            }
        }
        const token = await newOtp({ user_email: user_email, user_name: user_name, user_password: user_password })
        const result = await sendEmailToken({ user_email: user_email, token })

        return { token: result }
    }

    async logout(keyStore) {
        console.log("keyStore_id", keyStore._id)
        const delKey = await keyTokenService.removeKeyById(keyStore._id)
        return {
            code: 201,
            message: "user already logout",
            metaData: delKey
        }
    }

  
    async checkLoginEmailTokenService({ token }) {
        try {
            const { otp_email: email, otp_token, otp_key } = await checkEmailToken({ token })
            const userInfo = await jwt.verify(otp_token, otp_key)
            const { user_email, user_name, user_password } = userInfo
            if (!email || (email !== user_email)) throw new errorResponse.ErrorResponse({ message: "token not found" })

            const hasuser = await this.finduserByEmail({ user_email: email })
            if (hasuser) throw new errorResponse.ErrorResponse({ message: "email already exists" })


            const passwordHash = await GeneratePassword(user_password, 10)

            const newuser = await this.repository.createUser({ user_email: email, user_name: user_name, user_password: passwordHash })

            if (newuser) {
                const publicKey = await crypto.randomBytes(64).toString('hex')
                const privateKey = await crypto.randomBytes(64).toString('hex')

                const keyStore = await keyTokenService.createKeyToken({ userId: newuser._id, publicKey, privateKey })
                if (!keyStore) {
                    return { code: 403, message: "sign: err keys " }
                }
                //create tokenpair
                const tokens = await createToken({ userId: newuser._id, user_email: email }, publicKey, privateKey)
                user = await getInfoData({ fileds: ['_id', 'user_name', 'user_email'], object: newuser }),

                    console.log("tokens:;;", tokens)
                return {
                    message: "Success created user",
                    user,
                    tokens
                }
            }

        } catch (error) {
            return error
        }

    }

    async finduserByEmail({ user_email }) {

        const user = await UserModel.findOne({ user_email }).lean()
        return user
    }
    async finduserByIdAndProvider({ user_account_id, user_provider }) {
        return await this.repository.finduserByIdAndProvider({ user_account_id, user_provider })
    }
    

}

module.exports = UserService