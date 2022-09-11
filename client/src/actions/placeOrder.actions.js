import { toast } from "react-toastify";
import {
  createFailure,
  createRequest,
  createSuccess,
  getOrderFailure,
  getOrderRequest,
  getOrdersFailure,
  getOrdersRequest,
  getOrdersSuccess,
  getOrderSuccess,
} from "../slices/orderSlice";
import axiosIntance from "../utils/axios";
export const placeOrder = (dataR, navigate) => {
  return async (dispatch) => {
    dispatch(createRequest());
    try {
      const res = await axiosIntance.post("/orders", dataR);
      dispatch(createSuccess(res.data.order));
      localStorage.removeItem("cartItems");
      navigate(`/order/${res.data.order._id}`);
    } catch (err) {
      dispatch(createFailure(err.response.data.error));
      toast.error(err.response.data.error || err.message);
    }
  };
};

export const getOrderById = (id) => {
  return async (dispatch) => {
    dispatch(getOrderRequest());
    try {
      const res = await axiosIntance.get(`/orders/${id}`);
      dispatch(getOrderSuccess(res.data.order));
    } catch (error) {
      dispatch(getOrderFailure(error.response.data.error));
    }
  };
};
export const getMyOrders = () => {
  return async (dispatch) => {
    dispatch(getOrdersRequest());
    try {
      const res = await axiosIntance.get(`/orders/mine`);
      console.log(res);
      dispatch(getOrdersSuccess(res.data.orders));
    } catch (error) {
      dispatch(getOrdersFailure(error.response.data.error));
    }
  };
};
