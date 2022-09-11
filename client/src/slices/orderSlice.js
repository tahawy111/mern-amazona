import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  order: null,
  loadingPay: false,
  successPay: false,
  errorPay: null,
  orders: null,
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

    getOrdersRequest: (state) => {
      return { ...state, loading: true, orders: null, error: null };
    },
    getOrdersSuccess: (state, action) => {
      return { ...state, orders: action.payload, loading: false };
    },
    getOrdersFailure: (state, action) => {
      return { ...state, loading: false, error: action.payload };
    },

    payWithPaypalRequest: (state) => {
      return { ...state, loadingPay: true, successPay: false, errorPay: null };
    },
    payWithPaypalSuccess: (state) => {
      return { ...state, loadingPay: false, successPay: true };
    },
    payWithPaypalFailure: (state, action) => {
      return { ...state, loadingPay: false, errorPay: action.payload };
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
  getOrdersRequest,
  getOrdersSuccess,
  getOrdersFailure,
  payWithPaypalRequest,
  payWithPaypalSuccess,
  payWithPaypalFailure,
} = cartSlice.actions;

export default cartSlice.reducer;
