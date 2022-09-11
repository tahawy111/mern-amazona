import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  categories: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductsRequest: (state, action) => {
      return { ...state, loading: true, products: [], error: "" };
    },
    getProductsSuccess: (state, action) => {
      return { ...state, loading: false, products: action.payload.products };
    },
    getProductsFailure: (state, action) => {
      return { ...state, loading: false, error: action.payload.error };
    },
    getCategoriesRequest: (state, action) => {
      return { ...state, loading: true, categories: null, error: "" };
    },
    getCategoriesSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        categories: action.payload.categories,
      };
    },
    getCategoriesFailure: (state, action) => {
      return { ...state, loading: false, error: action.payload.error };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesFailure,
} = productSlice.actions;

export default productSlice.reducer;
