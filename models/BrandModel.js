const { model, Schema } = require('mongoose')
const DOCUMENT_NAME = 'Brand'
const COLLECTION_NAME = 'brands'

const brandSchema = new Schema({
    brand_name: { type: String, required: true },
    brand_description: String,
    brand_image:{ type: Array, default:[]}, 
},
    {
        collection: COLLECTION_NAME,
        timestamps: true
    })
module.exports = {
    brand: model(DOCUMENT_NAME, brandSchema)
}