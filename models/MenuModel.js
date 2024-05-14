const { model, Schema } = require('mongoose')
const slugify  = require('slugify')
const DOCUMENT_NAME = 'Menu'
const COLLECTION_NAME = 'menus'

const menuSchema = new Schema({
    menu_name:{type:String, requied: true},
    parent_id:{type:Object, default:{}},
    menu_link:{type:String, default:''},
    menu_type:{type:Object, default:''},
    menu_slug:String,
    menu_status:{type:String, enum: ['active',' '],default:'active'},
    menu_position:{type:String, default:''},
    isPublished: { type: Boolean, default: true, index: true, select: false },


},
    {
        collection: COLLECTION_NAME,
        timestamps: {
            createdAt: 'createdOn',
            updatedAt: 'modifiedOn'
        },
    }
)
menuSchema.pre('save', function (next) {
    this.menu_slug = slugify(this.menu_name, { lower: true })
    next();
})
menuSchema.index({ menu_name: 'text' });

module.exports = {
    menu: model(DOCUMENT_NAME, menuSchema)
}
