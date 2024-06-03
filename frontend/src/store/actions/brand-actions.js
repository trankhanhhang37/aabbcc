import { PostData } from "../../utils";
import { Action } from "../actions";

export const getBrand= (data) => async (dispatch) => {

    try {
      const response = await PostData('/brand/listcategory',data);
      console.log('response:', response)
      return dispatch({ type: Action.GET_CATEGORY, payload: response.data });
    } catch (err) {
      console.log(err)
      return err.response.data
    }
  
  };