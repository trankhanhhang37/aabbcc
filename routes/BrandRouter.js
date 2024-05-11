const express = require("express");
const router = express.Router();
const brandController = require("../controllers/BrandController");

router.post('', brandController.createBrand)

module.exports = router