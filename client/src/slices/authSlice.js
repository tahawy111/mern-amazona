import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : {},
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
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      return { ...state, user: action.payload, loading: false };
    },
    signinFailure: (state, action) => {
      return { ...state, error: action.payload, loading: false };
    },

    signout: (state, action) => {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("shippingAddress");
      return { ...state, error: "", user: {}, loading: false };
    },
  },
});

// Action creators are generated for each case reducer function
export const { signinRequest, signinSuccess, signinFailure, signout } =
  cartSlice.actions;

export default cartSlice.reducer;
