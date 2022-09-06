import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
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
  },
});

// Action creators are generated for each case reducer function
export const { getProductsRequest, getProductsSuccess, getProductsFailure } =
  productSlice.actions;

export default productSlice.reducer;
