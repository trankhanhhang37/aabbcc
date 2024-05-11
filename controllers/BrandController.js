'use strict'
const { SuccessResponse } = require("../core/success.response")
const BrandService = require("../services/BrandService")

class BrandController{
    createBrand=async(req,res, next)=>{
        new SuccessResponse({
            message:'success',
            metadata: await BrandService.newBrand({...req.body})
        }).send(res)
    }
}
module.exports = new BrandController;