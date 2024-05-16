const express = require("express");
const router = express.Router();
const spuController = require('../controllers/SpuController');

// router.get('/search/:keySearch', productController.getListSearch)
router.post('/allproducts', spuController.findProductsByAttributes)
// router.get('/:spu_id', spuController.findProduct)

router.get('/sku/select_variation', spuController.findOneSku)
router.get('/get_spu_info', spuController.findOneSpu)

// router.post('/newproduct', spuController.createProduct)
router.post('/new', spuController.createSpu)
// router.patch('/:productId', spuController.updateProduct)

router.post('/publish/:id', spuController.publishProduct)
router.post('/unpublish/:id', spuController.unPublishProduct)
//query
// router.get('/drafts/all', spuController.getAllDrafts)
// router.get('/published/all', spuController.getAllPublish)
router.post('/productbycategory', spuController.getProductsByCategory)
router.post('/productbyfilter', spuController.findProductsByFilter)
module.exports = router