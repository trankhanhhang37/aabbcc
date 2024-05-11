const { model, Schema } = require('mongoose')
const DOCUMENT_NAME = 'Topic'
const COLLECTION_NAME = 'topics'

const topicSchema = new Schema({
    topic_name: { type: String, required: true },
    parent_id:{ type: String, default:'0'},
    topic_description: String,
    topic_slug:String
},
    {
        collection: COLLECTION_NAME,
        timestamps: true
    })
module.exports = {
    topic: model(DOCUMENT_NAME, topicSchema)
}