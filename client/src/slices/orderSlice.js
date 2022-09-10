import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    createRequest: (state) => {
      return { ...state, loading: true, error: null };
    },
    createSuccess: (state) => {
      return { ...state, loading: false };
    },
    createFailure: (state, action) => {
      return { ...state, loading: false, error: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { createRequest, createSuccess, createFailure } =
  cartSlice.actions;

export default cartSlice.reducer;
