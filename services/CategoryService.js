'use strict'
const {category}=require('../models/CategoryModel')

class CategoryService{
    static async createCategory(payload){
        const{
            parent_id, name, description,
            icon, image
        }=payload
        
        const newCategory =await category.create({
            parent_id: parent_id,
            category_name: name,
            category_description: description,
            category_icon: icon,
            category_image: image
        })
        return newCategory

    }

}
module.exports = CategoryService