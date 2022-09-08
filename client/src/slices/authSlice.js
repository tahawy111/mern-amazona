import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loading: false,
  error: "",
};

export const cartSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signinRequest: (state, action) => {
      return { ...state, user: {}, loading: true, error: "" };
    },
    signinSuccess: (state, action) => {
      return { ...state, user: action.payload, loading: false };
    },
    signinFailure: (state, action) => {
      return { ...state, error: action.payload, loading: false };
    },
  },
});

// Action creators are generated for each case reducer function
export const { signinRequest, signinSuccess, signinFailure } =
  cartSlice.actions;

export default cartSlice.reducer;
