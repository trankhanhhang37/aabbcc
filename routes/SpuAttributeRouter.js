const express = require("express");
const router = express.Router();
const spuAttributeController = require("../controllers/SpuAttributeController");

router.post('', spuAttributeController.createSpuAttribute)

module.exports = router