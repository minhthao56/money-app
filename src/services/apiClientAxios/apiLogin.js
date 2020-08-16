import axiosClient from "./index";

const apiLogin = {
  postLogin: (data) => {
    const url = "users/login";
    return axiosClient.post(url, data);
  },
  postForgot: (data) => {
    const url = "users/forgot";
    return axiosClient.post(url, data);
  },
};
export default apiLogin;
