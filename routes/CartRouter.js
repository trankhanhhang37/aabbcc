const express = require("express");
const router = express.Router();
const cartController = require("../controllers/CartController");

router.post('', cartController.addToCart)
router.post('/update', cartController.updateToCart)
router.delete('/delete', cartController.deleteToCart)
router.get('', cartController.listToCart)

module.exports = router