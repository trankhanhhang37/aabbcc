'use strict'

const { Types } = require('mongoose')
const {spu}=require('../SpuModel')
const { getSelectData, unGetSelectData, convertToObjectMongoDb } = require('../../utils/index')

const getProductById =async(productId)=>{
    return await spu.findOne({_id: convertToObjectMongoDb(productId)}).lean()

}
const publishProduct = async ({ product_id }) => {

    const foundProduct = await spu.findOne({
        _id: new Types.ObjectId(product_id)
    })
    if (!foundProduct) return null
    foundProduct.isDraft = false
    foundProduct.isPublished = true

    console.log(foundProduct)

    const { modifiedCount } = await foundProduct.updateOne(foundProduct)
    //tra ve 0 neu 0ud, 1 ud thanh cong
    return modifiedCount
}

const unPublishProduct = async ({ product_id }) => {
    const foundProduct = await spu.findOne({
        _id: new Types.ObjectId(product_id)
    })
    if (!foundProduct) return null
    foundProduct.isDraft = true
    foundProduct.isPublished = false

    console.log(foundProduct)

    const { modifiedCount } = await foundProduct.updateOne(foundProduct)
    //tra ve 0 neu 0ud, 1 ud thanh cong
    return modifiedCount

}
const findAllProducts = async ({ limit, sort, page, filter, select }) => {
    const skip = (page - 1) * limit;
    const sortBy = sort === 'ctime' ? { _id: -1 } : { _id: 1 }
    const products = await spu.find(filter)
        .sort(sortBy)
        .skip(skip)
        .limit(limit)
        .select(getSelectData(select))
        .lean()
    return products
}

const findProduct = async ({ product_id, unSelect }) => {
    return await spu.findById(product_id).select(unGetSelectData(unSelect))
}

// const queryProduct = async ({ query, limit, skip }) => {
//     return await product.find(query).
//         sort({ updateAt: -1 })
//         .skip(skip)
//         .limit(limit)
//         .lean()
//         .exec()
// }

const checkProductByServer = async(products)=>{
    return await Promise.all(products.map(async product=>{
        const foundProduct =await getProductById(product.productId)
        console.log(foundProduct)

        if(foundProduct){
            return {
                price :foundProduct.product_price,
                quantity: product.quantity,
                productId: product.productId
            }
        }
    }))
}

module.exports={
    getProductById,
    // findAllDraft,
    // findAllPublish,
    publishProduct,
    unPublishProduct,
    // searchProduct,
    findAllProducts,
    findProduct,
    // updateProductById,
    getProductById,
    checkProductByServer
}
