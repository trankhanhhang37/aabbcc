'use strict';
const express = require('express')
const router = express.Router()
const commentController = require('../controllers/CommentController');


router.post('/get', commentController.getCommentByParentId)

///authentication
// router.use(authentication)
router.post('/create', commentController.createComment)
router.post('/deleteComment', commentController.deleteComment)

module.exports = router