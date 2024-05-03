'use strict'
const { cart } = require('../models/CartModel')
const { ForbiddenRequestError, NotFoundRequestError, ConflictRequestError, BadRequestError } = require('../core/error.response')
const { getProductById } = require('../models/repositories/product.repo')
class CartService {

    //start repo cart
    static async createUserCart({ userId, product }) {
        const query = { cart_userId: userId, cart_state: 'active' }
        const updateOrInsert = {
            $addToSet: {
                cart_products: product
            }
        }, options = {
            upsert: true,
            new: true
        }
        return await cart.findOneAndUpdate(query, updateOrInsert, options)

    }

    static async updateUserCartQuantity({ userId, product }) {

        const { productId, quantity } = product

        const query = {
            cart_userId: userId,
            'cart_products.productId': productId,
            cart_state: 'active'
        }, updateSet = {
            $inc: {
                'cart_products.$.quantity': quantity
            }
        }, options = {
            upsert: true,
            new: true
        }

        return await cart.findOneAndUpdate(query, updateSet, options)
    }

    //end repo cart

    static async addToCart({ userId, product = {} }) {
        //ktra cart co ton tai hay khong
        const userCart = await cart.findOne({ cart_userId: userId })
        if (!userCart) {
            return await CartService.createUserCart({ userId, product })
        }
        //neu co cart roi nhung chua co sp
        if (!userCart.cart_products.length) {
            userCart.cart_products = [product]
            return await userCart.save()
        }
        //gio hang ton tai co sp nay => update quantity
        return await this.updateUserCartQuantity({ userId, product })

    }

    //update cart trong gio hang
    static async addToCartV2({ userId, shop_order_ids = {} }) {
        const { productId, quantity, old_quantity } = shop_order_ids?.item_products
        //check sp co ton tai k
        const foundProduct = await getProductById( productId)
        if (!foundProduct) throw new NotFoundRequestError('product do not belong to the shop')

        if (quantity === 0) {
            //deleted
        }

        return await this.updateUserCartQuantity({
            userId,
            product: {
                productId,
                quantity: quantity - old_quantity
            }
        })
    }

    //deleted
    static async deleteUserCart({ userId, productId }) {
        console.log({userId, productId})
        const query = {
            cart_userId: userId,
            cart_state: 'active'
        }, updateSet = {
            $pull: {
                cart_products: { productId }
            }
        }

        return await cart.updateOne(query, updateSet)
    }

    //get list
    static  async getListUserCart({ userId }) {
        console.log({userId})
        return await cart.findOne({ cart_userId: userId }).lean()
    }
}

module.exports = CartService