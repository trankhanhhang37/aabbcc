'use strict'
const { cart } = require('../models/CartModel')
const { ForbiddenRequestError, NotFoundRequestError, ConflictRequestError, BadRequestError } = require('../core/error.response')
const { getProductById } = require('../models/repositories/spu.repo')
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

        const { productId, quantity, sku_id } = product

        const query = {
            cart_userId: userId,
            'cart_products.productId': productId,
            cart_state: 'active'
        }, updateSet = {
            $inc: {
                'cart_products.$.quantity': quantity
            },
            $set: {
                'cart_products.$.sku_id': sku_id
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
        //neu gio hang chua co sp khac 
        let hasProduct = await userCart.cart_products.find((pro) => {
            return pro.productId === product.productId
        })
        if (!hasProduct) {
            userCart.cart_products = [...userCart.cart_products, product]
            return await userCart.save()
        }
        //gio hang ton tai co sp nay => update quantity
        return await this.updateUserCartQuantity({ userId, product })

    }

    //update cart trong gio hang
    static async addToCartV2({ userId, shop_order_ids = {} }) {
        // console.log(userId[1].o1[0]+userId[1].o2[1])
        const { productId, quantity, old_quantity, sku_id } = shop_order_ids?.item_products
        console.log(shop_order_ids)
        // check sp co ton tai k
        const foundProduct = await getProductById(productId)
        if (!foundProduct) throw new NotFoundRequestError('product do not belong to the shop')

        if (quantity === 0) {
            //deleted
        }

        return await this.updateUserCartQuantity({
            userId,
            product: {
                productId,
                quantity: quantity - old_quantity,
                sku_id
            }
        })
    }

    //deleted
    static async deleteCartItem({ userId, productId }) {
        console.log({ userId, productId })
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

    //
    async deleteToCartByCartIdAndUserId({ cartId, userId }) {
        return await cart.deleteOne({ _id: Types.ObjectId(cartId), cart_userId: userId }).lean()
    }

    //get list
    static async getListUserCart({ userId }) {
        console.log({ userId })
        return await cart.findOne({ cart_userId: userId }).lean()
    }
}

module.exports = CartService