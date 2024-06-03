import { useDispatch, useSelector } from "react-redux";
import { getCategoryByParentId } from "../../store/actions";
import React, { useEffect, useState } from "react";
import CategoryChildItem from "./category_child_Item";

export default function CategoryItem({ cat }) {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState();

    // const { current_category } = useSelector((state) => state.categoryReducer);

    const [categoryItem, setCategoryItem] = useState(null);

    const getCategoryItem = async () => {
        const result = await dispatch(getCategoryByParentId({ sort: 'ctime', parent_id: cat._id }));
        setCategoryItem(result.payload.metaData)
        console.log(result)

    }


    useEffect(() => {
        if (!categoryItem) {
            getCategoryItem()
        }
    }, [categoryItem]);
    const handleTabMouseEnter = (tabId) => {
        setActiveTab(tabId);
    };



    return (
        <>
            {categoryItem && categoryItem.map((category, index) => {
                return (
                    <div className="col-md " key={index} >
                        <div className="d-flex flex-column">
                            <h6 className="mb-2 link-dark text-center " style={{textTransform:"uppercase"}}>{category.category_name}</h6>
                            <CategoryChildItem cat={category} key={index} />
                        </div>
                    </div>
                )
            })}

        </>

    );

}