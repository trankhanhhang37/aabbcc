import { useDispatch, useSelector } from "react-redux";
import { getChildCategoryByParentId } from "../../store/actions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CategoryChildItem({ cat }) {
    const dispatch = useDispatch();

    // const { child_category } = useSelector((state) => state.categoryReducer);

    const [child_category, setChildCategory] = useState(null);

    const getCategory = async () => {
        const result = await dispatch(getChildCategoryByParentId({ sort: 'ctime', parent_id: cat._id }));
        setChildCategory(result.payload.metaData)

    }

    useEffect(() => {
        if (!child_category) {
            getCategory()
        }
    }, [child_category]);

    return (
        <>
            {child_category && child_category.map((category, index) => {
                return (
                    <>
                        <div className="col-md border-0" key={index} >
                            <div className="d-flex flex-column">
                                <Link to={"/"} className="mb-2  text-center " style={{color:"#004d00"}}  >{category.category_name}</Link>
                            </div>
                        </div>

                    </>
                )

            }


            )}

        </>

    );

}