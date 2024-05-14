const express = require("express");
const router = express.Router();
const TopicController = require("../controllers/TopicController");

router.post('', TopicController.createTopic)
router.get('', TopicController.getListTopic)
router.post('/listtopic', TopicController.getListTopicByParentId)


module.exports = router