'use strict'
const { blog } = require('../models/BlogModel')
const { getSelectData } = require('../utils')

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

    static async getListBlogs({sort, isPublished = true, select}) {
        const sortBy = sort === 'ctime' ? { _id: -1 } : { _id: 1 }
        const listBlog =await blog.find({
            isPublished
        }).sort(sortBy)
        .select(getSelectData(select))
        .lean()
        return listBlog
    }

}
module.exports = BlogService