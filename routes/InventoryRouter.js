const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/InventoryController");

router.post('/review',  inventoryController.addStockToInventory)

module.exports = router