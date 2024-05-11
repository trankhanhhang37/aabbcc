const express = require("express");
const router = express.Router();
const spuController = require('../controllers/SpuController');
const { asyncHandler } = require("../helpers");

// router.get('/search/:keySearch', productController.getListSearch)
router.post('/allproducts', spuController.findAllProducts)
router.get('/:spu_id', spuController.findProduct)

router.get('/sku/select_variation', spuController.findOneSku)
router.get('/spu/get_spu_info', asyncHandler(spuController.findOneSpu))

// router.post('/newproduct', spuController.createProduct)
router.post('/new', spuController.createSpu)
// router.patch('/:productId', spuController.updateProduct)

router.post('/publish/:id', spuController.publishProduct)
router.post('/unpublish/:id', spuController.unPublishProduct)
//query
// router.get('/drafts/all', spuController.getAllDrafts)
// router.get('/published/all', spuController.getAllPublish)


module.exports = router