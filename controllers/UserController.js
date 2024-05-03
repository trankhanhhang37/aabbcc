const UserService = require('../services/UserService')
// const JwtService = require('../services/JwtService')

const createUser = async (req, res) => {
    console.log(req.body);
    try {
        const { name, email, password, confirmPassword, phone } = req.body;
       
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
        if (!name || !email || !password || !confirmPassword || !phone) {
            return res.status(200).json({
                status: 'err',
                message: 'The input in required'
            })
        } else if (!isCheckEmail) {
            return res.status(200).json({
                status: 'err',
                message: 'The input in email'
            })
        } else if (password !== confirmPassword) {
            return res.status(200).json({
                status: 'err',
                message: 'The Password is equal confirmPassword'
            })
        }
        const response = await UserService.createUser(req.body)
        return res.status(200).json(response)
    } catch (e) {
        
        return res.status(404).json({
            message: e
        })
    }
}
const loginUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, phone } = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
        if (!name || !email || !password || !confirmPassword || !phone) {
            return res.status(200).json({
                status: 'err',
                message: 'The input in required'
            })
        } else if (!isCheckEmail) {
            return res.status(200).json({
                status: 'err',
                message: 'The input in email'
            })
        } else if (password !== confirmPassword) {
            return res.status(200).json({
                status: 'err',
                message: 'The Password is equal confirmPassword'
            })
        }
        const response = await UserService.loginUser(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsUser = async (req, res) => {
    console.log(req.body);
    try {
        const {userId} = req.body
        if (!userId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The userId is required'
            })
        }
        const response = await UserService.getDetailsUser(userId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createUser,
    loginUser,
    getDetailsUser
}