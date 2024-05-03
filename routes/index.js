const UserRouter = require('./UserRouter')
const ProductRouter = require('./ProductRouter')
const DiscountRouter = require('./DiscountRouter')
const CartRouter = require('./CartRouter')
const CheckoutRouter = require('./CheckoutRouter')

const routes = (app) => {
    app.use('/api/product', ProductRouter)
    app.use('/api/discount', DiscountRouter)
    app.use('/api/user', UserRouter)
    app.use('/api/cart', CartRouter)
    app.use('/api/checkout', CheckoutRouter)
    app.use('/api/inventory', CheckoutRouter)


}
module.exports = routes