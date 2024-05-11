'use strict'
const BRAND_MODEL = require('../models/BrandModel')

const newBrand = async ({
    brand_name, brand_image, brand_description
}) => {
    try {
        const brands = await BRAND_MODEL.brand.create({
            brand_name, brand_image, brand_description
        })
        return brands

    } catch (error) {
        console.log(`error`)

    }
}
module.exports = { newBrand }