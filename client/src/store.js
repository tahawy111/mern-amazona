import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import orderSlice from "./slices/orderSlice";
import productSlice from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    auth: authSlice,
    order: orderSlice,
  },
});
