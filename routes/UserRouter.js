'use strict';

const express = require('express')
const router = express.Router()
const userController = require('../controllers/UserController');

router.get('/welcome', userController.checkLoginEmailToken)
router.post('/signup', userController.signUp)
router.post('/login', userController.login)

///authentication
// router.use(authentication)

router.post('/logout', userController.logout)
router.post('/handlerRefreshToken', userController.handlerRefreshToken)

module.exports = router