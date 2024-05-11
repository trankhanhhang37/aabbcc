'use strict'

const cloudinary = require('../config/cloudinary_config')

class UploadService {
    async uploadImage({
        files, folderName = 'website/products'
    }) {
        try {
            if (!files.length) return
            const uploaderUrl = []
            for (const file of files) {
                const result = await cloudinary.v2.uploader.upload(file.path, { folder: folderName })
                uploaderUrl.push({
                    image_url: result.secure_url,
                    thumb_url: await cloudinary.url(result.public_id, {
                    }),
                    result: result
                })
            }
            return uploaderUrl

        } catch (error) {
            console.log("err loading image", error)
        }

    }
}
module.exports=UploadService