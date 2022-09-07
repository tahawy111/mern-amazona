import axios from "axios";
import {
  getProductsFailure,
  getProductsRequest,
  getProductsSuccess,
} from "../slices/productSlice";
export const getProducts = () => {
  return async (dispatch) => {
    dispatch(getProductsRequest());
    try {
      const res = await axios.get("/api/product");
      dispatch(getProductsSuccess({ products: res.data.products }));
    } catch (error) {
      dispatch(getProductsFailure({ error: error.data }));
    }
  };
};
