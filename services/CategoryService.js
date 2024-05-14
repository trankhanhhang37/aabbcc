'use strict'
const { category } = require('../models/CategoryModel')
const { getSelectData } = require('../utils')

class CategoryService {
    static async createCategory(payload) {
        const {
            parent_id, name, description,
            icon, image
        } = payload

        const newCategory = await category.create({
            parent_id: parent_id,
            category_name: name,
            category_description: description,
            category_icon: icon,
            category_image: image
        })
        return newCategory
    }

    static async getListCategoryByParentId({ sort, parent_id, select }) {
        const sortBy = sort === 'ctime' ? { _id: -1 } : { _id: 1 }
        const listcategory = await category.find({
            "parent_id": parent_id,

        }).sort(sortBy)
            .select(getSelectData(select))
            .lean()
        return listcategory
    }



}
module.exports = CategoryService