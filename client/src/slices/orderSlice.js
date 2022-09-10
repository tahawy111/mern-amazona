import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  order: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    createRequest: (state) => {
      return { ...state, order: null, loading: true, error: null };
    },
    createSuccess: (state, action) => {
      return { ...state, order: action.payload, loading: false };
    },
    createFailure: (state, action) => {
      return { ...state, loading: false, error: action.payload };
    },
    getOrderRequest: (state) => {
      return { ...state, loading: true, order: null, error: null };
    },
    getOrderSuccess: (state, action) => {
      return { ...state, order: action.payload, loading: false };
    },
    getOrderFailure: (state, action) => {
      return { ...state, loading: false, error: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  createRequest,
  createSuccess,
  createFailure,
  getOrderRequest,
  getOrderSuccess,
  getOrderFailure,
} = cartSlice.actions;

export default cartSlice.reducer;
