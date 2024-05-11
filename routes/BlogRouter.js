const express = require("express");
const router = express.Router();
const BlogController = require("../controllers/BlogController");

router.post('', BlogController.createBlog)

module.exports = router