import axiosIntance from "./../utils/axios.js";
import {
  signinFailure,
  signinRequest,
  signinSuccess,
} from "../slices/authSlice.js";

export const signin = (user) => {
  return async (dispatch) => {
    try {
      dispatch(signinRequest());
      const res = await axiosIntance.post("/user/signin", user);
      dispatch(signinSuccess(res.data));
    } catch (error) {
      dispatch(signinFailure(error.response.data.error));
    }
  };
};
