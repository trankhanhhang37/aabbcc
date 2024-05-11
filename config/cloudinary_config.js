'use strict'
const cloudinary = require('cloudinary')
cloudinary.config({
    cloud_name: "khanhhang",
    api_key:"254112656568876",
    api_secret: process.env.CLOUDINARY_API_SECRET
})
module.exports=cloudinary