const express = require("express");
const router = express.Router();
const brandController = require("../controllers/BrandController");

router.post('', brandController.createBrand)
router.get('', brandController.getListBrand)


module.exports = router