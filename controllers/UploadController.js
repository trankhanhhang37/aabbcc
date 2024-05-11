'use strict'
const { BadRequestError } = require('../core/error.response')
const { SuccessResponse } = require('../core/success.response')
const UploadService = require('../services/UploadService')

class UploadController {
    constructor(){
        this.service=new UploadService
    }
    uploadImage = async(req, res, next)=>{
        const{files}=req
        if(!files.length)
            throw new BadRequestError ("files missing")
        return new SuccessResponse({
            message: "uploadimage ",
            metaData: await this.service.uploadImage({files})
        }).send(res)
    }
}
module.exports= new UploadController