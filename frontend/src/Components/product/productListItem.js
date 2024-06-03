import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProWishList } from "../../store/actions";
import { toast } from "react-toastify";

export default function ProductListItem({ product }) {
    console.log('product', product)

    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.userReducer);


    const addPro = async () => {
        await dispatch(addProWishList({
            userId: userInfo._id,
            productId: product._id
        }))
        toast.success("Đã thêm vào yêu thích")

    }
    return (
        <div class="col-md-12" key={product._id}>
            <div class="card shadow-0 border rounded-3">
                <div class="card-body">
                    <div class="row g-0">
                        <div class="col-xl-3 col-md-4 d-flex justify-content-center">
                            <div class="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                                <img src={product.product_thumb} class="w-100" />
                                <a href="#!">
                                    <div class="hover-overlay">
                                        <div class="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-5 col-sm-7">
                            <h5>{product.product_name}</h5>
                            <div class="d-flex flex-row">
                                <div class="text-warning mb-1 me-2">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                    <span class="ms-1">
                                        4.5
                                    </span>
                                </div>
                                <span class="text-muted">154 orders</span>
                            </div>

                            <p class="text mb-4 mb-md-0">
                                {product.product_name}
                            </p>
                        </div>
                        <div class="col-xl-3 col-md-3 col-sm-5">
                            <div class="d-flex flex-row align-items-center mb-1">
                                <h4 class="mb-1 me-1">{product.product_price}</h4>
                                <span class="text-danger"><s>$49.99</s></span>
                            </div>
                            <h6 class="text-success">Free shipping</h6>
                            <div class="mt-4">
                                <button class="btn btn-primary shadow-0" type="button">Buy this</button>
                                <button class="btn btn-light border px-2 pt-2 icon-hover "><i class="fas fa-heart fa-lg px-1"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}