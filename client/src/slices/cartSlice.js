import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: { cartItems: [] },
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

      return { ...state, cart: { ...state.cart, cartItems } };
    },
  },
});

// Action creators are generated for each case reducer function
export const { cartAddItem } = cartSlice.actions;

export default cartSlice.reducer;
