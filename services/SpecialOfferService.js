'use strict'

const { specialOffer } = require('../models/SpecialOfferModel')
const { getSelectData } = require('../utils')

class SpecialOfferService {
    static async createSpecialOffer(payload) {
        const {
            name, start_date, end_date, image, is_active,
            description, spu_list
        } = payload

        //kiem tra
        // if (Date.now() > new Date(start_date) || Date.now() > new Date(end_date)) {
        //     throw new ForbiddenRequestError('discount code has expired')
        // }

        // if (new Date(start_date) >= new Date(end_date)) {
        //     throw new ForbiddenRequestError('start date must be before end_date')
        // }
        const newSpecialOffer = await specialOffer.create({
            special_offer_name: name,
            special_offer_description: description,
            special_offer_start_date: start_date, // ngay bat dau
            special_offer_end_date: end_date, // ngyay ket thuc
            special_offer_image: image,
            special_offer_is_active: is_active,
            special_offer_spu_list: spu_list
        })
        console.log(newSpecialOffer)
        return newSpecialOffer
    }

    static async getSpecialOfferBySpuId({ spu_id }) {

        const special = await specialOffer.find({
            "special_offer_spu_list.product_id": {
                $in: [spu_id]
            }
        })
        console.log(special)
        return special
    }
}
module.exports = SpecialOfferService