'use strict'
const {topic}=require('../models/TopicModel')

class TopicService{
    static async createTopic(payload){
        const{
            parent_id, name, description, slug
        }=payload
        
        const newTopic =await topic.create({
            parent_id: parent_id,
            topic_name: name,
            topic_description: description,
            topic_image: slug
        })
        return newTopic

    }

}
module.exports = TopicService