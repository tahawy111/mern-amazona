import { axios } from "axios";
import {
  getProductsFailure,
  getProductsRequest,
  getProductsSuccess,
} from "../slices/productSlice";
export const getProducts = () => {
  return async (dispatch) => {
    dispatch(getProductsRequest());
    try {
      const res = await axios.get("/api/products");
      console.log(res);
      dispatch(getProductsSuccess({ products: res.data }));
    } catch (error) {
      dispatch(getProductsFailure({ error: error.data }));
    }
  };
};
