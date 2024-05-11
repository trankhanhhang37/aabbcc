const express = require("express");
const router = express.Router();
const attributeController = require("../controllers/AttributeController");
const { asyncHandler } = require("../helpers");

router.post('', attributeController.createAttribute)
router.get('',asyncHandler(attributeController.getAttribute))


module.exports = router