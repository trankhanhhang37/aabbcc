"use strict";

const { model, Schema } = require('mongoose')
const slugify = require('slugify')

const DOCUMENT_NAME = "user"
const COLLECTION_NAME = "users"

const userSchema = new Schema({
    user_account_id: { type: String, default: "1" },
    user_slug: { type: String, default: "" },
    user_name: { type: String, default: "" },
    user_password: { type: String, default: "" },
    user_salf: { type: String, default: "" },
    user_email: { type: String, default: "" },
    user_phone: { type: String, default: "" },
    user_sex: { type: String, default: "" },
    user_avatar: { type: String, default: "" },
    user_date_of_birth: { type: Date, default: null },
    user_provider:{type: String, default: ""},
    user_status: { type: String, default: 'pending', enum: ['pending', 'active', 'block'] }
},
    {
        timestamps: true,
        collection: COLLECTION_NAME
    }
)
userSchema.pre('save', function (next) {
    this.user_slug = slugify(this.user_name, { lower: true })
    next();
})


module.exports = model(DOCUMENT_NAME, userSchema)