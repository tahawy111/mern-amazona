import axiosIntance from "./../utils/axios.js";
import {
  signinFailure,
  signinRequest,
  signinSuccess,
  signupFailure,
  signupRequest,
  signupSuccess,
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
export const signup = (user) => {
  return async (dispatch) => {
    try {
      dispatch(signupRequest());
      const res = await axiosIntance.post("/user/signup", user);
      console.log(res);
      dispatch(signupSuccess(res.data));
    } catch (error) {
      dispatch(signupFailure(error.response.data.error));
    }
  };
};
