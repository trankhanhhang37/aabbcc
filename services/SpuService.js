'use strict'
const { NotFoundRequestError } = require('../core/error.response')
const { sku } = require('../models/SkuModel')
const SPU_MODEL = require('../models/SpuModel')
const { randomProductId } = require('../utils')
const { newSku, allSkuBySpuId } = require('./SkuService')
const _ = require('lodash')

const newSpu = async ({
    product_name,
    product_thumb,
    product_description,
    product_slug,
    product_price, 
    product_category,
    product_quantity,
    product_attributes=[],
    product_variations=[],
    sku_list = []

}) => {
    try {
        //create new spu
        const spu = await SPU_MODEL.spu.create({
            product_id: randomProductId(),
            product_name,
            product_thumb,
            product_description,
            product_slug,
            product_price,
            product_category,
            product_quantity,
            product_attributes,
            product_variations,
        })
        // get spu_id add to sku.service
        if (spu && sku_list.length) {
            //3 cteate sku
            newSku({ spu_id: spu.product_id,sku_list })
                .then()
          
        }
        return spu
    }
    catch (error) {
        console.log(`error`)
        
    }
}

const oneSpu =async({spu_id})=>{
try {
    const spu = await SPU_MODEL.spu.findOne({
        product_id: spu_id,
        isPublished: false// true
    })
    if(!spu) throw new NotFoundRequestError('spu not found')
    const skus = await allSkuBySpuId({product_id: spu.product_id})
    return {
        spu_info: _.omit(spu, ['__v','updateAt']),
        sku_list: skus.map(sku => _.omit(sku, ['__v','updateAt','createAt','isDeleted']))
    }

    
} catch (error) {
    return null
}
}

module.exports = {
    newSpu, oneSpu
}