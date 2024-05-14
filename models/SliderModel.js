const { model, Schema } = require('mongoose')
const slugify  = require('slugify')
const DOCUMENT_NAME = 'Slider'
const COLLECTION_NAME = 'sliders'

const sliderSchema = new Schema({
    slider_name:{type:String, requied: true},
    slider_link:{type:String, default:''},
    slider_image:{ type:Array, default:[]},
    slider_position:{type:String, default:''}

},
    {
        collection: COLLECTION_NAME,
        timestamps: {
            createdAt: 'createdOn',
            updatedAt: 'modifiedOn'
        },
    }
)
module.exports = {
    slider: model(DOCUMENT_NAME, sliderSchema)
}