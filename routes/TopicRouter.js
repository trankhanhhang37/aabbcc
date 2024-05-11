const express = require("express");
const router = express.Router();
const TopicController = require("../controllers/TopicController");

router.post('', TopicController.createTopic)

module.exports = router