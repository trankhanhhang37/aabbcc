const { model, Schema, Types } = require('mongoose')
const DOCUMENT_NAME = 'Category'
const COLLECTION_NAME = 'categories'

const categorySchema = new Schema({
    parent_id:{ type: String, default:'0'},
    category_name: { type: String, required: true },
    category_description: String,
    category_icon: String,
    category_image:{ type: Array, default:[]}, 
    isPublished: { type: Boolean, default: true, index: true, select: false },
},
    {
        collection: COLLECTION_NAME,
        timestamps: true
    })
module.exports = {
    category: model(DOCUMENT_NAME, categorySchema)
}

