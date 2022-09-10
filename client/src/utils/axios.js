import axios from "axios";
const token = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")).token
  : null;

const axiosIntance = axios.create({
  baseURL: "http://localhost:2000/api/",
  headers: {
    authorization: token ? `Bearer ${token}` : "",
  },
});

// axiosIntance.interceptors.request.use((req) => {
//   const { auth } = store.getState();

//   if (auth.token) {
//     req.headers.authorization = `Bearer ${auth.token}`;
//   }

//   return req;
// });
// axiosIntance.interceptors.response.use(
//   (res) => res,
//   (error) => {
//     console.log(error);
//     const { status } = error.response;
//     if (status === 500 || status === 400) {
//       store.dispatch(logoutSuccess());
//     }
//     return Promise.reject(error.response);
//   }
// );

export default axiosIntance;
