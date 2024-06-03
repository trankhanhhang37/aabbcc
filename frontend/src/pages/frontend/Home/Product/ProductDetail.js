import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onProductDetail } from "../../../../store/actions/product-actions";
import { useParams } from "react-router-dom";

function ProductDetail() {
    const { product_slug_id } = useParams()
    const spu_id = product_slug_id.split("-").pop()
    const [activeTab, setActiveTab] = useState("ex1-pills-1");
    const [quantity, setQuantity] = useState(1);
    const [largeImageSrc, setLargeImageSrc] = useState("https://www.guardian.com.vn/media/catalog/product/cache/174b3b3a0496b37750e6ede7d70a85ba/t/h/thumbnail_3016733_ll05dd24.jpg");
    const [isChecked, setIschecked] = useState(false)
    const [sku_tier_idx, setSku_tier_idx] = useState([0, 0])
    const [selected_sku, set_selected_sku] = useState(null)
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };
    const changeLargeImage = (newSrc) => {
        setLargeImageSrc(newSrc);
    };
    const dispatch = useDispatch();

    const { productDetail } = useSelector((state) => state.productReducer);



    /////changeVariation
    const onChangeVariation = async (indexOption, indexVariation) => {
        setSku_tier_idx((e) => {
            const newArr = e.slice();
            newArr[indexVariation] = indexOption
            console.log(newArr)
            return newArr
        })

        console.log(indexOption, indexVariation)
    }

    useEffect(() => {
        productDetail && (
            !selected_sku && set_selected_sku(productDetail.sku_list.find((sku) => sku.sku_tier_idx.toString() === sku_tier_idx.toString()))
        )
    }, [productDetail,sku_tier_idx])

    useEffect(() => {
        if (!productDetail) {
            dispatch(onProductDetail({ spu_id: spu_id }));
        }
    }, [productDetail]);
    console.log(productDetail);

    return (
        <>
            <div className="bg-primary">
                <div className="container py-4">
                    {/*<!-- Breadcrumb --> */}
                    <nav className="d-flex">
                        <h6 className="mb-0">
                            <a href="" className="text-white-50">Trang chủ</a>
                            <span className="text-white-50 mx-2">/ </span>
                            <a href="" className="text-white-50">Chi tiết</a>

                        </h6>
                    </nav>
                    {/*<!-- Breadcrumb --> */}
                </div>
            </div>
            <section className="py-5">
                <div className="container">
                    <div className="row gx-5">
                        <aside className="col-lg-6">
                            <div className="border rounded-4 mb-3 d-flex justify-content-center">
                                <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image"
                                >
                                    <img style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }} className="rounded-4 fit"
                                        src={largeImageSrc} />
                                </a>
                            </div>
                            <div className="d-flex justify-content-center mb-3">
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image"
                                    onClick={() => changeLargeImage("https://www.guardian.com.vn/media/catalog/product/cache/174b3b3a0496b37750e6ede7d70a85ba/t/h/thumbnail_3016733_ll05dd24.jpg")}
                                >
                                    <img width="60" height="60" className="rounded-2" src="https://www.guardian.com.vn/media/catalog/product/cache/174b3b3a0496b37750e6ede7d70a85ba/t/h/thumbnail_3016733_ll05dd24.jpg" />
                                </a>
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image"
                                    onClick={() => changeLargeImage("https://www.guardian.com.vn/media/catalog/product/cache/174b3b3a0496b37750e6ede7d70a85ba/s/g/sg-11134201-7rblh-lpenx6thbdxz86.jpg")}
                                >
                                    <img width="60" height="60" className="rounded-2" src="https://www.guardian.com.vn/media/catalog/product/cache/174b3b3a0496b37750e6ede7d70a85ba/s/g/sg-11134201-7rblh-lpenx6thbdxz86.jpg" />
                                </a>
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image"
                                    onClick={() => changeLargeImage("https://www.guardian.com.vn/media/catalog/product/cache/174b3b3a0496b37750e6ede7d70a85ba/s/g/sg-11134201-7rbn4-lpenx94pxkqu60.jpg")}
                                >
                                    <img width="60" height="60" className="rounded-2" src="https://www.guardian.com.vn/media/catalog/product/cache/174b3b3a0496b37750e6ede7d70a85ba/s/g/sg-11134201-7rbn4-lpenx94pxkqu60.jpg" />
                                </a>
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image"
                                >
                                    <img width="60" height="60" className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp" />
                                </a>
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href=""  >
                                    <img width="60" height="60" className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp" />
                                </a>
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href=""  >
                                    <img width="60" height="60" className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp" />
                                </a>
                            </div>
                            {/*<!-- thumbs-wrap.// --> */}
                            {/*<!-- gallery-wrap .end// --> */}
                        </aside>
                        <main className="col-lg-6">
                            <div className="ps-lg-3">
                                <h4 className="title text-dark">
                                   {productDetail && productDetail.spu_info.product_name}
                                </h4>
                                <div className="d-flex flex-row my-3">
                                    <div className="text-warning mb-1 me-2">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <span className="ms-1">
                                            4.5
                                        </span>
                                    </div>
                                    <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                                    <span className="text-success ms-2">In stock : {selected_sku && selected_sku.sku_stock}</span>
                                </div>

                                <div className="mb-3">
                                    <span className="h5">{selected_sku&&selected_sku.sku_price}</span>
                                    <span className="text-muted">/per box</span>
                                </div>

                                <p>
                                    Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
                                    men.
                                </p>

                                <div className="row">
                                    <dt className="col-3">Type:</dt>
                                    <dd className="col-9">Regular</dd>

                                    <dt className="col-3">Color</dt>
                                    <dd className="col-9">Brown</dd>

                                    <dt className="col-3">Material</dt>
                                    <dd className="col-9">Cotton, Jeans</dd>

                                    <dt className="col-3">Brand</dt>
                                    <dd className="col-9">Reebook</dd>
                                </div>

                                <hr />

                                <div className="row mb-4">
                                    {/* <div className="col-md-4 col-6">
                                <label className="mb-2">Size</label>
                                <select className="form-select border border-secondary"  style={{height: '35px'}}>
                                    <option>Small</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                </select>
                            </div> */}
                                    {productDetail && productDetail.spu_info.product_variations.map((variation, indexVariation) => {
                                        return (
                                            <div key={indexVariation}>
                                                <p>{variation.name}</p>
                                                <div class="btn-group">
                                                    {variation.options.map((option, indexOption) => {
                                                        return (
                                                            <div key={indexOption} >
                                                                <input type="radio" class="btn-check" name="options" id={option} autocomplete="off" value={indexOption} onClick={() => onChangeVariation(indexOption, indexVariation)} />
                                                                <label class="btn btn-secondary" for={option} data-mdb-ripple-init>{option}</label>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>

                                        )
                                    })}
                                    {/*<!-- col.// --> */}
                                    <div className="col-md-4 col-6 mb-3">
                                        <label className="mb-2 d-block">Quantity</label>
                                        <div className="input-group mb-3" style={{ width: '170px' }}>
                                            <button className="btn btn-white border border-secondary px-3" type="button" onClick={decreaseQuantity}>
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <input
                                                type="text"
                                                className="form-control text-center border border-secondary"
                                                value={quantity}
                                                aria-label="Example text with button addon"
                                                aria-describedby="button-addon1"
                                                readOnly
                                            />
                                            <button className="btn btn-white border border-secondary px-3" type="button" onClick={increaseQuantity}>
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>                        </div>
                                <a href="#" className="btn btn-warning shadow-0"> Buy now </a>
                                <a href="#" className="btn btn-primary shadow-0"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>
                                <a href="#" className="btn btn-light border border-secondary py-2 icon-hover px-3"> <i className="me-1 fa fa-heart fa-lg"></i> Save </a>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            {/*<!-- content --> */}

            <section className="bg-light border-top py-4">
                <div className="container">
                    <div className="row gx-4">
                        <div className="col-lg-8 mb-4">
                            <div className="border rounded-2 px-3 py-2 bg-white">
                                {/*<!-- Pills navs --> */}
                                <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                    <li className="nav-item d-flex" role="presentation">
                                        <a className={`nav-link d-flex align-items-center justify-content-center w-100 ${activeTab === "ex1-pills-1" ? "active" : ""}`}
                                            id="ex1-tab-1"
                                            data-mdb-toggle="pill"
                                            href="#ex1-pills-1"
                                            role="tab"
                                            aria-controls="ex1-pills-1"
                                            aria-selected="true"
                                            onClick={() => handleTabChange("ex1-pills-1")}
                                        >Giới thiệu</a>
                                    </li>
                                    <li className="nav-item d-flex" role="presentation">
                                        <a className={`nav-link d-flex align-items-center justify-content-center w-100 ${activeTab === "ex1-pills-2" ? "active" : ""}`}
                                            id="ex1-tab-2"
                                            data-mdb-toggle="pill"
                                            href="#ex1-pills-2"
                                            role="tab"
                                            aria-controls="ex1-pills-2"
                                            aria-selected="true"
                                            onClick={() => handleTabChange("ex1-pills-2")}
                                        >Công dụng</a>
                                    </li>
                                    <li className="nav-item d-flex" role="presentation">
                                        <a className={`nav-link d-flex align-items-center justify-content-center w-100 ${activeTab === "ex1-pills-3" ? "active" : ""}`}
                                            id="ex1-tab-3"
                                            data-mdb-toggle="pill"
                                            href="#ex1-pills-3"
                                            role="tab"
                                            aria-controls="ex1-pills-3"
                                            aria-selected="true"
                                            onClick={() => handleTabChange("ex1-pills-3")}
                                        >Thành phần</a>
                                    </li>
                                    <li className="nav-item d-flex" role="presentation">
                                        <a className={`nav-link d-flex align-items-center justify-content-center w-100 ${activeTab === "ex1-pills-4" ? "active" : ""}`}
                                            id="ex1-tab-4"
                                            data-mdb-toggle="pill"
                                            href="#ex1-pills-4"
                                            role="tab"
                                            aria-controls="ex1-pills-4"
                                            aria-selected="true"
                                            onClick={() => handleTabChange("ex1-pills-4")}

                                        >Hướng dẫn sử dụng</a>
                                    </li>
                                </ul>
                                {/*<!-- Pills navs --> */}

                                {/*<!-- Pills content --> */}
                                <div className="tab-content" id="ex1-content">
                                    <div className={`tab-pane fade ${activeTab === 'ex1-pills-1' ? 'show active' : ''} `} id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                                        <p>
                                            With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur.
                                        </p>
                                        <div className="row mb-2">
                                            <div className="col-12 col-md-6">
                                                <ul className="list-unstyled mb-0">
                                                    <li><i className="fas fa-check text-success me-2"></i>Some great feature name here</li>
                                                    <li><i className="fas fa-check text-success me-2"></i>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li><i className="fas fa-check text-success me-2"></i>Duis aute irure dolor in reprehenderit</li>
                                                    <li><i className="fas fa-check text-success me-2"></i>Optical heart sensor</li>
                                                </ul>
                                            </div>
                                            <div className="col-12 col-md-6 mb-0">
                                                <ul className="list-unstyled">
                                                    <li><i className="fas fa-check text-success me-2"></i>Easy fast and ver good</li>
                                                    <li><i className="fas fa-check text-success me-2"></i>Some great feature name here</li>
                                                    <li><i className="fas fa-check text-success me-2"></i>Modern style and design</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <table className="table border mt-3 mb-2">
                                            <tr>
                                                <th className="py-2">Display:</th>
                                                <td className="py-2">13.3-inch LED-backlit display with IPS</td>
                                            </tr>
                                            <tr>
                                                <th className="py-2">Processor capacity:</th>
                                                <td className="py-2">2.3GHz dual-core Intel Core i5</td>
                                            </tr>
                                            <tr>
                                                <th className="py-2">Camera quality:</th>
                                                <td className="py-2">720p FaceTime HD camera</td>
                                            </tr>
                                            <tr>
                                                <th className="py-2">Memory</th>
                                                <td className="py-2">8 GB RAM or 16 GB RAM</td>
                                            </tr>
                                            <tr>
                                                <th className="py-2">Graphics</th>
                                                <td className="py-2">Intel Iris Plus Graphics 640</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className={`tab-pane fade ${activeTab === 'ex1-pills-2' ? 'show active' : ''} mb-2`} id="ex1-pills-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                                        Tab content or sample information now <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    </div>
                                    <div className={`tab-pane fade ${activeTab === 'ex1-pills-3' ? 'show active' : ''} mb-2`} id="ex1-pills-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                                        Another tab content or sample information now <br />
                                        Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum.
                                    </div>
                                    <div className={`tab-pane fade ${activeTab === 'ex1-pills-4' ? 'show active' : ''} mb-2`} id="ex1-pills-4" role="tabpanel" aria-labelledby="ex1-tab-4">
                                        Some other tab content or sample information now <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollit anim id est laborum.
                                    </div>
                                </div>
                                {/*<!-- Pills content --> */}
                            </div>
                            <div className="border rounded-2 px-3 py-2 bg-white">
                                <div className="tab-content" id="ex1-content">
                                    <div className="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                                        <h4>ĐÁNH GIÁ CỦA KHÁCH HÀNG</h4>
                                        <p>(0)</p>
                                        <ul data-mdb-rating-init class="rating mb-3" data-mdb-toggle="rating">
                                            <li>
                                                <i class="far fa-star fa-sm text-danger" title="Bad"></i>
                                            </li>
                                            <li>
                                                <i class="far fa-star fa-sm text-danger" title="Poor"></i>
                                            </li>
                                            <li>
                                                <i class="far fa-star fa-sm text-danger" title="OK"></i>
                                            </li>
                                            <li>
                                                <i class="far fa-star fa-sm text-danger" title="Good"></i>
                                            </li>
                                            <li>
                                                <i class="far fa-star fa-sm text-danger" title="Excellent"></i>
                                            </li>
                                        </ul>
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="d-flex flex-start">
                                                    <img class="rounded-circle shadow-1-strong me-3"
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp" alt="avatar" width="40"
                                                        height="40" />
                                                    <div class="w-100">
                                                        <div class="d-flex justify-content-between align-items-center mb-3">
                                                            <h6 class="text-primary fw-bold mb-0">
                                                                lara_stewart
                                                                <span class="text-body ms-2">Hmm, This poster looks cool</span>
                                                            </h6>
                                                            <p class="mb-0">2 days ago</p>
                                                        </div>
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <p class="small mb-0" style={{ color: '#aaa' }}>
                                                                <a href="#!" class="link-grey">Remove</a> •
                                                                <a href="#!" class="link-grey">Reply</a> •
                                                                <a href="#!" class="link-grey">Translate</a>
                                                            </p>
                                                            <div class="d-flex flex-row">
                                                                <i class="fas fa-star text-warning me-2"></i>
                                                                <i class="far fa-check-circle me-2" style={{ color: '#ff8647' }}></i>
                                                                <a href="#!" class="link-grey " style={{ color: '#ff8647' }}>Đã mua hàng</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="px-0 border rounded-2 shadow-0">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Similar items</h5>
                                        <div className="d-flex mb-3">
                                            <a href="#" className="me-3">
                                                <img src="" style={{ minWidth: '96px', height: '96px' }} className="img-md img-thumbnail" />
                                            </a>
                                            <div className="info">
                                                <a href="#" className="nav-link mb-1">
                                                    Rucksack Backpack Large <br />
                                                    Line Mounts
                                                </a>
                                                <strong className="text-dark"> $38.90</strong>
                                            </div>
                                        </div>

                                        <div className="d-flex mb-3">
                                            <a href="#" className="me-3">
                                                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp" style={{ minWidth: '96px', height: '96px' }} className="img-md img-thumbnail" />
                                            </a>
                                            <div className="info">
                                                <a href="#" className="nav-link mb-1">
                                                    Summer New Men's Denim <br />
                                                    Jeans Shorts
                                                </a>
                                                <strong className="text-dark"> $29.50</strong>
                                            </div>
                                        </div>

                                        <div className="d-flex mb-3">
                                            <a href="#" className="me-3">
                                                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp" style={{ minWidth: '96px', height: '96px' }} className="img-md img-thumbnail" />
                                            </a>
                                            <div className="info">
                                                <a href="#" className="nav-link mb-1"> T-shirts with multiple colors, for men and lady </a>
                                                <strong className="text-dark"> $120.00</strong>
                                            </div>
                                        </div>

                                        <div className="d-flex">
                                            <a href="#" className="me-3">
                                                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp" style={{ minWidth: '96px', height: '96px' }} className="img-md img-thumbnail" />
                                            </a>
                                            <div className="info">
                                                <a href="#" className="nav-link mb-1"> Blazer Suit Dress Jacket for Men, Blue color </a>
                                                <strong className="text-dark"> $339.90</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ProductDetail;