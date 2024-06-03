import { Space } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Ripple, Tab, initMDB } from "mdb-ui-kit";
import Menu from "./MenuHeader";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../store/actions";
import CategoryItem from "../../Components/navbar/categoryItem";

const Categories = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeTab, setActiveTab] = useState();

    const handleDropdownMouseEnter = () => {
        setIsDropdownOpen(true);
    };
    const dispatch = useDispatch();

    const { listCategory } = useSelector((state) => state.categoryReducer);

    useEffect(() => {
        if (!listCategory) {
            dispatch(getCategory({ sort: 'ctime' }));
        } else {
            setActiveTab(listCategory.metaData[0]._id)
            console.log(listCategory, activeTab);
        }

    }, []);

    const handleDropdownMouseLeave = () => {
        setIsDropdownOpen(false);
    };
    const handleTabMouseEnter = (tabId) => {
        setActiveTab(tabId);
    };


    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-white">

            <div class="container justify-content-center justify-content-md-between">
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarLeftAlignExample"
                    aria-controls="navbarLeftAlignExample" aria-expanded="false" aria-label="Toggle navigation" onClick={() => {
                        document.getElementById('navbarLeftAlignExample').classList.toggle('show');
                    }}>
                    {/* <i className="fas fa-bars"></i> */}
                </button>
                <div class="collapse navbar-collapse" id="navbarLeftAlignExample">

                    <ul class="navbar-nav me-auto mb-1 mb-lg-0">
                        <div class="btn-group shadow-0"
                            onMouseEnter={handleDropdownMouseEnter}
                            onMouseLeave={handleDropdownMouseLeave}
                        >
                            <button type="button" class="btn btn-light " >
                                <i class="fas fa-bars" style={{ marginRight: '3px' }}></i>
                                DANH MỤC
                            </button>

                            <ul
                                class={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    right: 0,
                                    zIndex: 1000000000,
                                    width: '933%',
                                    minWidth: '100%',
                                    maxWidth: 'none',
                                    padding: '0.5rem 0',
                                }}

                            >
                                <div class="row">
                                    <div class="col-3">
                                        {listCategory && listCategory.metaData.map((category, index) => {
                                            return (
                                                <div class="list-group list-group-light" id="list-tab" role="tablist" key={index}>
                                                    <a
                                                        className={`list-group-item list-group-item-action px-3 border-0 ${activeTab == category._id ? 'active' : ''}`}
                                                        id="list-home-list"
                                                        data-mdb-list-init
                                                        // href=""
                                                        role="tab"
                                                        aria-controls={activeTab}
                                                        onMouseEnter={() => handleTabMouseEnter(category._id)}
                                                    >
                                                        {
                                                            category.category_name
                                                        } </a>
                                                    {/* <a
                                            className={`list-group-item list-group-item-action px-3 border-0 ${activeTab === 'list-cate02' ? 'active' : ''}`}
                                            id="list-profile-list"
                                            data-mdb-list-init
                                            // href=""
                                            role="tab"
                                            aria-controls="list-cate02"
                                            onMouseEnter={() => handleTabMouseEnter('list-cate02')}
                                        > Trang điểm
                                        </a>
                                        <a
                                            className={`list-group-item list-group-item-action px-3 border-0 ${activeTab === 'list-cate03' ? 'active' : ''}`}
                                            id="list-profile-list"
                                            data-mdb-list-init
                                            // href=""
                                            role="tab"
                                            aria-controls="list-cate02"
                                            onMouseEnter={() => handleTabMouseEnter('list-cate03')}
                                        > Chăm sóc cơ thể
                                        </a>
                                        <a
                                            className={`list-group-item list-group-item-action px-3 border-0 ${activeTab === 'list-cate04' ? 'active' : ''}`}
                                            id="list-profile-list"
                                            data-mdb-list-init
                                            // href=""
                                            role="tab"
                                            aria-controls="list-cate02"
                                            onMouseEnter={() => handleTabMouseEnter('list-cate04')}
                                        > Chăm sóc sức khỏe
                                        </a>
                                        <a
                                            className={`list-group-item list-group-item-action px-3 border-0 ${activeTab === 'list-cate05' ? 'active' : ''}`}
                                            id="list-profile-list"
                                            data-mdb-list-init
                                            // href=""
                                            role="tab"
                                            aria-controls="list-cate02"
                                            onMouseEnter={() => handleTabMouseEnter('list-cate05')}
                                        > Chăm sóc cá nhân
                                        </a>
                                        <a
                                            className={`list-group-item list-group-item-action px-3 border-0 ${activeTab === 'list-cate06' ? 'active' : ''}`}
                                            id="list-profile-list"
                                            data-mdb-list-init
                                            // href=""
                                            role="tab"
                                            aria-controls="list-cate02"
                                            onMouseEnter={() => handleTabMouseEnter('list-cate06')}
                                        > Chăm sóc tóc
                                        </a> */}

                                                </div>

                                            )

                                        })}
                                    </div>
                                    
                                    <div class="col-9">
                                        <div class="tab-content" id="nav-tabContent">
                                            {listCategory && listCategory.metaData.map((category, index) => {
                                                return (
                                                    <div className={`tab-pane fade ${activeTab == category._id ? 'show active' : ''}`} id={category._id} role="tabpanel" aria-labelledby="list-home-list" key={index}>
                                                        <div className="d-flex justify-content-between align-content-between">
                                                            <CategoryItem cat={category} key={index} />
                                                        </div>
                                                    </div>
                                                )

                                            })}
                                            {/* <div className={`tab-pane fade ${activeTab === 'list-cate02' ? 'show active' : ''}`} id="list-cate02" role="tabpanel" aria-labelledby="list-home-list">

                                            </div> */}
                                            {/* <div className={`tab-pane fade ${activeTab === 'list-cate03' ? 'show active' : ''}`} id="list-cate03" role="tabpanel" aria-labelledby="list-home-list">
                                                2Some placeholder content in a paragraph relating to "Messages". And some more content, used here
                                                just to pad out and fill this tab panel. In production, you would obviously have more real content
                                                here. And not just text. It could be anything, really. Text, images, forms.
                                            </div>
                                            <div className={`tab-pane fade ${activeTab === 'list-cate04' ? 'show active' : ''}`} id="list-cate04" role="tabpanel" aria-labelledby="list-home-list">

                                                1here. And not just text. It could be anything, really. Text, images, forms.
                                            </div>
                                            <div className={`tab-pane fade ${activeTab === 'list-cate05' ? 'show active' : ''}`} id="list-cate05" role="tabpanel" aria-labelledby="list-home-list">

                                                2here. And not just text. It could be anything, really. Text, images, forms.
                                            </div>
                                            <div className={`tab-pane fade ${activeTab === 'list-cate06' ? 'show active' : ''}`} id="list-cate06" role="tabpanel" aria-labelledby="list-home-list">

                                                3here. And not just text. It could be anything, really. Text, images, forms.
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                            </ul>

                        </div>


                        <Menu />
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">THƯƠNG HIỆU</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">BÁN CHẠY</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">HÀNG MỚI VỀ</a>
                        </li>
                        <li class="nav-item">
                            <Link to={'/blog'} class="nav-link text-dark" >BÀI VIẾT</Link>
                        </li>
                        <li class="nav-item">
                        <Link to={'/contact'} class="nav-link text-dark" >LIÊN HỆ</Link>
                        </li>
                    </ul>

                </div>
            </div>

        </nav>

    );

}
export default Categories