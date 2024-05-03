'use strict'

const ProductService = require('../services/ProductService')
const { SuccessResponse } = require('../core/success.response')
const { newSpu, oneSpu } = require('../services/SpuService')
const { oneSku } = require('../services/SkuService')

class ProductController {

    //spu, skuice
    findOneSpu=async(req, res, next)=>{
        try {
            const{product_id}=req.query;
            new SuccessResponse({
                message: 'get success productone',
                metadata: await oneSpu({spu_id: product_id})
            }).send(res)
        } catch (error) {
            next(error)
        }
    }
    findOneSku=async(req, res, next)=>{
        try {
            const{ sku_id, product_id}=req.query;
            new SuccessResponse({
                message: 'success',
                metadata: await oneSku({sku_id, product_id})
            }).send(res)
            
        } catch (error) {
            next(error)
        }
    }


    createSpu =async(req, res, next)=>{
        try {
            const spu = await newSpu({...req.body})
            new SuccessResponse({
                message: 'success create spu',
                metadata: spu
            }).send(res)

    
        } catch (error) {
            next(error)
        }

    }
    //end spu ,sku

    createProduct = async (req, res, next) => {
        new SuccessResponse({
            message: 'success',
            metadata: await ProductService.createProduct(req.body.product_type, req.body)
        }).send(res)
    }

    //update product
    updateProduct = async (req, res, next) => {
        new SuccessResponse({
            message: 'update product success',
            metadata: await ProductService.updateProduct(
                req.body.product_type,  req.params.productId, { ...req.body}
            )
        }).send(res)
    }

    //query
    /**
     * @desc get all draft 
     * @param {Number} limit
     * @param {Number} skip
     * @return {JSON}
     */
    publishProduct = async (req, res, next) => {
        new SuccessResponse({
            message: 'success',
            metadata: await ProductService.publishProduct({
                product_id: req.params.id
            })
        }).send(res)
    }

    unPublishProduct = async (req, res, next) => {
        new SuccessResponse({
            message: 'success',
            metadata: await ProductService.unPublishProduct({
                product_id: req.params.id
            })
        }).send(res)
    }

    getAllDrafts = async (req, res, next) => {
        new SuccessResponse({
            message: 'get list draft',
            metadata: await ProductService.findAllDraft()
        }).send(res)
    }

    getAllPublish = async (req, res, next) => {
        new SuccessResponse({
            message: 'get list published',
            metadata: await ProductService.findAllPublish()
        }).send(res)
    }

    getListSearch = async (req, res, next) => {
        new SuccessResponse({
            message: 'get list search product',
            metadata: await ProductService.searchProduct(req.params)
        }).send(res)
    }

    findAllProducts = async (req, res, next) => {
        new SuccessResponse({
            message: 'get find all products product',
            metadata: await ProductService.findAllProducts(req.query)
        }).send(res)
    }

    findProduct = async (req, res, next) => {
        new SuccessResponse({
            message: 'get find  products product',
            metadata: await ProductService.findProduct({
                product_id: req.params.product_id
            })
        }).send(res)
    }
}

module.exports = new ProductController;
