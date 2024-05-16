"use strict";
const  AddressModel  = require('../models/AddressModel');

class AddressService {

    // constructor() {
    //     this.repository = new addressRepository();
    // }

    // async AddNewAddress(_id, userInputs) {

    //     const { street, postalCode, city, country, phone_number } = userInputs;

    //     const addressResult = await this.repository.CreateAddress({ _id, street, postalCode, city, country, phone_number })

    //     return FormateData(addressResult);
    // }

    async createAddress({ user_id, phone_number, street, postal_code, city, country }) {

        const query = { user_id: user_id }
        const updateOrInsert = {
            $addToSet: {
                phone_number: phone_number,
                street:street,
                postal_code:postal_code,
                city:city,
                country:country
            }
        }, options = {
            upsert: true,
            new: true
        }
        return await AddressModel.findOneAndUpdate(query, updateOrInsert, options)
    }

}

module.exports = new AddressService;