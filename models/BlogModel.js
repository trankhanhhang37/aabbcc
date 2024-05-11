const { model, Schema } = require('mongoose')
const DOCUMENT_NAME = 'Blog'
const COLLECTION_NAME = 'blogs'

const blogSchema = new Schema({
    blog_name: { type: String, required: true },
    topic_id:{ type: String, default:'0'},
    blog_description: String,
    blog_image:{ type: Array, default:[]}, 
    blog_slug:String,
    blog_title: String,
    blog_detail: String
},
    {
        collection: COLLECTION_NAME,
        timestamps: true
    })
    
module.exports = {
    blog: model(DOCUMENT_NAME, blogSchema)
}