const express = require("express");
const router = express.Router();
const UploadController = require("../controllers/UploadController");
const { uploadDisk } = require("../config/multiple");

router.post('/product/multiple', uploadDisk.array('files',10), UploadController.uploadImage)

module.exports = router