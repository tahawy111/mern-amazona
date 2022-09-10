import { toast } from "react-toastify";
import {
  createFailure,
  createRequest,
  createSuccess,
} from "../slices/orderSlice";
import axiosIntance from "../utils/axios";
export const placeOrder = (dataR, navigate) => {
  return async (dispatch) => {
    dispatch(createRequest());
    try {
      const res = await axiosIntance.post("/orders", dataR);
      console.log(res);

      dispatch(createSuccess());
      localStorage.removeItem("cartItems");
      navigate(`/order/${res.data.order._id}`);
    } catch (err) {
      dispatch(createFailure(err.response.data.error));
      toast.error(err.response.data.error || err.message);
    }
  };
};
