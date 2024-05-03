const User = require('../models/UserModel')
const bcryptjs = require("bcryptjs")
const { genneralAccessToken ,genneralRefreshToken} = require("./JwtService")

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = newUser
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser !== null) {
                resolve({
                    status: 'Ok',
                    message: 'The email is already'
                })
            }
            const hash = await bcryptjs.genSalt();
            console.log('hash', hash);
            const createUser = await User.create({
                name,
                email,
                password:hash,
                phone
            
            })
            if (createUser) {
                resolve({
                    status: 'OK',
                    message: 'Succes',
                    data: createUser
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const { email, password } = userLogin
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined'
                })
            }
            const comparePassword = bcryptjs.compare(password,checkUser.password)
            if (!comparePassword) {
                resolve({
                    status: 'ERR',
                    message: 'The password or user is incorrect'
                })
            }
            const access_token = await genneralAccessToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })
            console.log('access_token',access_token)

            const refresh_token = await genneralRefreshToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })
           
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                access_token,
                refresh_token,
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findOne({
                _id: id
            })
            if (user === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined'
                })
            }
            resolve({
                status: 'OK',
                message: 'SUCESS',
                data: user
            })
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    createUser,
    loginUser,
    getDetailsUser
}