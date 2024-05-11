'use strict'
const { blog } = require('../models/BlogModel')

class BlogService {
    static async createBlog(payload) {
        const {
            name, topic_id, description, image, slug, title, detail
        } = payload

        const newBlog = await blog.create({
            blog_name: name,
            topic_id: topic_id,
            blog_description: description,
            blog_image: image,
            blog_slug: slug,
            blog_title: title,
            blog_detail: detail

        })
        return newBlog

    }

}
module.exports = BlogService