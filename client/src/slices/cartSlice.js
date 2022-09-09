import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
    paymentMethod: localStorage.getItem("paymentMethod")
      ? localStorage.getItem("paymentMethod")
      : "",
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartAddItem: (state, action) => {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find((x) => x._id === newItem._id);
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];

      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      return { ...state, cart: { ...state.cart, cartItems } };
    },
    cartRemoveItem: (state, action) => {
      const cartItems = state.cart.cartItems.filter((item) => {
        return item._id !== action.payload._id;
      });

      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      return { ...state, cart: { ...state.cart, cartItems } };
    },
    saveShippingAddress: (state, action) => {
      localStorage.setItem("shippingAddress", JSON.stringify(action.payload));
      return {
        ...state,
        cart: { ...state.cart, shippingAddress: action.payload },
      };
    },
    savePaymentMethod: (state, action) => {
      localStorage.setItem("paymentMethod", JSON.stringify(action.payload));
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: action.payload },
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  cartAddItem,
  cartRemoveItem,
  saveShippingAddress,
  savePaymentMethod,
} = cartSlice.actions;

export default cartSlice.reducer;
