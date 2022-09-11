import axiosIntance from "./../utils/axios";
import {
  getCategoriesFailure,
  getCategoriesRequest,
  getCategoriesSuccess,
  getProductsFailure,
  getProductsRequest,
  getProductsSuccess,
} from "../slices/productSlice";
export const getProducts = () => {
  return async (dispatch) => {
    dispatch(getProductsRequest());
    try {
      const res = await axiosIntance.get("/product");
      dispatch(getProductsSuccess({ products: res.data.products }));
    } catch (error) {
      dispatch(getProductsFailure({ error: error.data }));
    }
  };
};
export const getCategories = () => {
  return async (dispatch) => {
    dispatch(getCategoriesRequest());
    try {
      const res = await axiosIntance.get("/product/categories");
      console.log(res);
      dispatch(getCategoriesSuccess({ categories: res.data.categories }));
    } catch (error) {
      dispatch(getCategoriesFailure({ error: error.data }));
    }
  };
};
export const search = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axiosIntance.get(
        `/product/search?page=${payload.page}&query=${payload.query}&category=${payload.category}&price=${payload.price}`
      );
    } catch (error) {}
  };
};
