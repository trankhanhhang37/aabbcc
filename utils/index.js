'use strict'
const _ = require('lodash')
const { Types } = require('mongoose')

const convertToObjectMongoDb = (id) => { 
    return new Types.ObjectId(id) }

const getInfoData = ({ filed = [], object = {} }) => {
    return _.pick(object, filed)
}

//('a','b')=(a:1,b:1)
const getSelectData = (select = []) => {
    return Object.fromEntries(select.map(el => [el, 1]))
}

//('a','b')=(a:0,b:0)
const unGetSelectData = (select = []) => {
    return Object.fromEntries(select.map(el => [el, 0]))
}

const removeUndefindObject = obj => {
    Object.keys(obj).forEach(k => {
        if (obj[k] == null) {
            delete obj[k];
        }
    })
    return obj
}

const updateNestedObjectParser = obj => {
    console.log(`1;;`, obj)
    const final = {}
    Object.keys(obj).forEach(k => {
        console.log(`3`, k)
        if (typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
            const response = updateNestedObjectParser(obj[k])
            Object.keys(response).forEach(a => {
                final[`${k}.${a}`] = response[a]
            })
        }
        else {
            final[k] = obj[k]
        }
    })
    return final
}

const randomProductId= _ =>{
    return Math.floor(Math.random()*899999+100000)
}

module.exports = {
    getInfoData, getSelectData,
    unGetSelectData,
    removeUndefindObject,
    updateNestedObjectParser,
    convertToObjectMongoDb,
    randomProductId,

}