const express = require("express");
const router = express.Router();
const discountController = require("../controllers/DiscountController");

router.post('/amount', discountController.getAllDiscountAmount)
router.get('/list_product_code', discountController.getAllDiscountCodeWithProduct)
router.post('/newcode', discountController.createDiscountCode)
router.get('/all_code', discountController.getAllDiscountCode)

module.exports = router