const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/CategoryController");

router.post('', categoryController.createCategory)
router.post('/listcategory', categoryController.getListCategoryByParentId)


module.exports = router