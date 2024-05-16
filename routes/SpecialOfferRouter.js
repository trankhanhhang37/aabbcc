const express = require("express");
const router = express.Router();
const specialOfferController = require("../controllers/SpecialOfferController");
const { asyncHandler } = require("../helpers");

router.post('', asyncHandler(specialOfferController.createSpecialOffer))
router.post('/listSpecialOffer', specialOfferController.getSpecialOfferBySpuId)


module.exports = router