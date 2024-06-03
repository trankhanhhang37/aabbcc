import { useDispatch, useSelector } from "react-redux";
import { addProWishList } from "../../store/actions/wishlist-actions";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function ProductItem({ product }) {
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.userReducer);

    const addPro = async () => {
        const addProductWishlist = await dispatch(addProWishList({
            userId: userInfo._id,
            productId: product._id
        }))
        toast.success("Đã thêm vào yêu thích")

    }
    return (
        <>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex" key={product._id}>
                <div className="card bg-image hover-zoom ripple rounded ripple-surface w-100 my-2 shadow-2-strong">
                    <Link to={`/product/${product.product_slug}-${product._id}`}><img src={product.product_thumb} className="card-img-top " /></Link>
                    <div className="card-body d-flex flex-column">
                        <div className="d-flex flex-row">
                            <h5 className="mb-1 me-1">{product.product_price}</h5>
                            <span className="text-danger"><s>$49.99</s></span>
                        </div>
                        <p className="card-text">{product.product_name}</p>
                        <div className=" d-flex align-items-end px-0 pb-0 mt-auto">
                            <a href="#!" className="btn btn-primary shadow-0 px-1 me-1"
                            >Add to cart</a>
                            {userInfo ?
                                <button className="btn btn-light border icon-hover px-2 pt-2" onClick={addPro}><i className="fas fa-heart fa-lg text-secondary px-1" ></i></button>
                                :
                                <button className="btn btn-light border icon-hover px-2 pt-2" ><i className="fas fa-heart fa-lg text-secondary px-1" ></i></button>
                            }
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}