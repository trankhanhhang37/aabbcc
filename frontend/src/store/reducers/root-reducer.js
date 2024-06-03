import { combineReducers } from 'redux';
import UserReducer from './user-reducer';
import ProductReducer from './product-reducer';
import CartReducer from './cart-reducer';
import CategoryReducer from './category-reducer';
import InfoReducer from './info-reducer';
import WishlistReducer from './wishlist-reducer';
import BlogReducer from './blog-reducer';
import TopicReducer from './topic-reducer';


const reducers = combineReducers({
    userReducer: UserReducer,
    productReducer: ProductReducer,
    cartReducer: CartReducer,
    categoryReducer: CategoryReducer,
    infoReducer: InfoReducer,
    wishlistReducer: WishlistReducer,
    blogReducer: BlogReducer,
    topicReducer: TopicReducer


})
export default reducers