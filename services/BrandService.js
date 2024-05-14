'use strict'
const BRAND_MODEL = require('../models/BrandModel')
const { getSelectData } = require('../utils')

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

const getListBrand = async ({ sort, isPublished = true, select }) => {
    try {
        const sortBy = sort === 'ctime' ? { _id: -1 } : { _id: 1 }
        const listbrand = await BRAND_MODEL.brand.find({
            isPublished
        }).sort(sortBy)
            .select(getSelectData(select))
            .lean()
        return listbrand

    } catch (error) {

    }
}
module.exports = { newBrand, getListBrand }