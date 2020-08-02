import axiosClient from "./index";

const apiLogin = {
  postLogin: (data) => {
    const url = "users/login";
    return axiosClient.post(url, data);
  },
};
export default apiLogin;
