'use strict'
const { NotFoundRequestError } = require('../core/error.response')
const SPU_MODEL = require('../models/SpuModel')
const { newSku, allSkuBySpuId } = require('./SkuService')
const _ = require('lodash')
const { addImage } = require('./GalleryService')
const spu_repo = require('../models/repositories/spu.repo')
const { Types } = require('mongoose')

const newSpu = async ({
    product_name,
    product_thumb,
    product_description,
    product_slug,
    product_price,
    product_category,
    product_brand,
    product_quantity,
    product_attributes = [],
    product_variations = [],
    isDraft=true,
    isPublished=false,
    sku_list = []

}) => {
    try {
        //create new spu
        const spu = await SPU_MODEL.spu.create({
            product_name,
            product_thumb,
            product_description,
            product_slug,
            product_price,
            product_category,
            product_brand,
            product_quantity,
            product_attributes,
            product_variations,
            isDraft,
            isPublished
        })
        // get spu_id add to sku.service
        if (spu && sku_list.length) {
            const skus = await newSku({ spu_id: spu._id, sku_list })
            sku_list.map(sku => {
                skus.map(skuModel => {
                    if (skuModel.sku_tier_idx.toString() === sku.sku_tier_idx.toString()) {
                        addImage({ spu_id: spu._id, sku_id: skuModel._id, thumb_url: sku.thumb_url, public_id: sku.public_id })
                    }
                })
            })
        }
        return spu
    }
    catch (error) {
        console.log(`error`)

    }
}

const oneSpu = async ({spu_id}) => {
 
    try {
        const spu = await SPU_MODEL.spu.findOne({
            _id:new  Types.ObjectId(spu_id),
            isPublished: false// true
        })
        console.log(spu)
        if (!spu) throw new NotFoundRequestError('spu not found')
        const skus = await allSkuBySpuId({ product_id: spu._id })
        console.log(spu)
        return {
            spu_info: _.omit(spu, ['__v', 'updateAt']),
            sku_list: skus.map(sku => _.omit(sku, ['__v', 'updateAt', 'createAt', 'isDeleted']))
        }
    } catch (error) {
        return null
    }
}

const isPublishProduct = async ({ product_id }) => {
    console.log(product_id)
    return await spu_repo.publishProduct({ product_id })
}

const isUnPublishProduct = async ({ product_id }) => {
    console.log(product_id)
    return await spu_repo.unPublishProduct({ product_id })
}

const isFindProductsByAttributes = async ({ limit = 50, sort = 'ctime', page = 1, filter = { isPublished: true } }) => {
    return await spu_repo.isFindProductsByAttributes({
        limit, sort, page, filter,
        select: ['product_name', 'product_thumb', 'product_price', 'product_type']
    })
}

const isFindProductByFilter = async ({ limit = 50, sort = 'ctime', page = 1,
    filter = { isPublished: true, product_attributes, product_category: '',
     product_brand: [], product_price: { min_price: 0, max_price: 99999999 } } }) => {


        
    return await spu_repo.findProductByFilter({
        limit, sort, page, filter,
        select: ['product_name', 'product_thumb', 'product_price', 'product_type']
    })
}

const isFindProduct = async ({ product_id }) => {
    return await spu_repo.findProduct({ product_id, unSelect: ['__v', 'product_thumb', 'product_price'] })
}

const isProductsByCategory = async ({ limit = 50, sort = 'ctime', page = 1, filter = { isPublished: true, product_category: '' } }) => {
    return await spu_repo.isProductByCategory({
        limit, sort, page, filter,
        select: ['product_name', 'product_category', 'product_thumb', 'product_price', 'product_type']
    })
}



module.exports = {
    newSpu, oneSpu, isPublishProduct, isUnPublishProduct, isFindProductsByAttributes, isFindProduct,
    isProductsByCategory, isFindProductByFilter
}