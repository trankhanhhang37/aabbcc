'use strict'
const { attributeValue } = require('../models/AttributeValueModel')
const ATTRIBUTES_MODEL = require('../models/AttributesModel')
const { newAttributeValue, allAttributeValue } = require('./AttributeValueService')
const _ = require('lodash')

const newAttribute = async ({
    attribute_name, attribute_value_list = []
}) => {
    try {
        const attributes = await ATTRIBUTES_MODEL.attribute.create({
            attribute_name
        })
        console.log(attributes)

        if (attributes && attribute_value_list.length) {
            //3 cteate sku
            newAttributeValue({ attribute_id: attributes._id, attribute_value_list })
                .then()

        }
        return attributes
    } catch (error) {
        console.log(`error`)
    }
}
const findAttribute = async ({
    attribute_id
}) => {
    try {
        const attribute = await ATTRIBUTES_MODEL.attribute.findOne({ _id: attribute_id })
        console.log(attribute)

        if (!attribute) throw new NotFoundRequestError('attribute not found')

        const attribute_value = await allAttributeValue({ attribute_id: attribute._id })
        console.log(attribute_value)

        return {
            attribute_info: _.omit(attribute, ['__v', 'updateAt']),
            attribute_value_list: attribute_value.map(attributeValue => _.omit(attributeValue, ['__v', 'updateAt', 'createAt',]))
        }


    } catch (error) {

    }
}
module.exports = { newAttribute, findAttribute }