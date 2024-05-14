'use strict'

const { SuccessResponse } = require("../core/success.response")
const CategoryService = require("../services/CategoryService")

class CategoryController{
    createCategory=async(req,res, next)=>{
        new SuccessResponse({
            message:'success',
            metadata: await CategoryService.createCategory({...req.body})
        }).send(res)
    }
    getListCategoryByParentId=async(req,res, next)=>{
        new SuccessResponse({
            message:'success',
            metadata: await CategoryService.getListCategoryByParentId(req.body)
        }).send(res)
    }
}
module.exports = new CategoryController;