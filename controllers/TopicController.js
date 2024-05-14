'use strict'
const { SuccessResponse } = require("../core/success.response")
const TopicService = require("../services/TopicService")
class TopicController{
    createTopic=async(req,res, next)=>{
        new SuccessResponse({
            message:'success',
            metadata: await TopicService.createTopic({...req.body})
        }).send(res)
    }
    getListTopic=async(req,res, next)=>{
        new SuccessResponse({
            message:'success',
            metadata: await TopicService.getListTopic({...req.query})
        }).send(res)
    }
    getListTopicByParentId=async(req,res, next)=>{
        new SuccessResponse({
            message:'success',
            metadata: await TopicService.getListTopicByParentId({...req.body})
        }).send(res)
    }
}
module.exports = new TopicController;