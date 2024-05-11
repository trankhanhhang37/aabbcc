'use strict'
const { SuccessResponse } = require("../core/success.response")
const BlogService = require("../services/BlogService")
class BlogController{
    createBlog=async(req,res, next)=>{
        new SuccessResponse({
            message:'success',
            metadata: await BlogService.createBlog({...req.body})
        }).send(res)
    }
}
module.exports = new BlogController;