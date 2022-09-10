import { toast } from "react-toastify";
import {
  createFailure,
  createRequest,
  createSuccess,
  getOrderRequest,
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
      console.log(error);
    }
  };
};
