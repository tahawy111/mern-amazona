import axiosIntance from "./../utils/axios.js";
import {
  signinFailure,
  signinRequest,
  signinSuccess,
  signupFailure,
  signupRequest,
  signupSuccess,
  updateProfileFailure,
  updateProfileRequest,
  updateProfileSuccess,
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
export const updateUserProfile = (user) => {
  return async (dispatch) => {
    dispatch(updateProfileRequest());
    try {
      const { data } = await axiosIntance.put("/user/profile", user);
      dispatch(updateProfileSuccess(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch(updateProfileFailure(error.response.data.error));
    }
  };
};
