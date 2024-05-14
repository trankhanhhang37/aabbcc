"use strict";

const { AddressModel } = require('../AddressModel');
const UserModel = require('../UserModel');

class AddressRepository {

    async CreateAddress({ _id, phone_number, street, postalCode, city, country }) {

        const profile = await UserModel.findById(_id);

        if (profile) {

            const newAddress = new AddressModel({
                _id,
                phone_number,
                street,
                postalCode,
                city,
                country
            })

            await newAddress.save();

            profile.address.push(newAddress);
        }

        return await profile.save();
    }


}

module.exports = AddressRepository;