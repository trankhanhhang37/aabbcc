const express = require("express");
const router = express.Router();
const productController = require('../controllers/ProductController');
const { asyncHandler } = require("../helpers");

router.get('/search/:keySearch', productController.getListSearch)
router.get('/allproducts', productController.findAllProducts)
router.get('/:product_id', productController.findProduct)
router.get('/sku/select_variation', productController.findOneSku)
router.get('/spu/get_spu_info', asyncHandler(productController.findOneSpu))

router.post('/newproduct', productController.createProduct)
router.post('/spu/new', productController.createSpu)
router.patch('/:productId', productController.updateProduct)

router.post('/publish/:id', productController.publishProduct)
router.post('/unpublish/:id', productController.unPublishProduct)
//query
router.get('/drafts/all', productController.getAllDrafts)
router.get('/published/all', productController.getAllPublish)


module.exports = router