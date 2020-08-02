import axiosClient from "./index";

const apiForgot = {
  postForgot: (data) => {
    const url = "users/forgot";
    return axiosClient.post(url, data);
  },
};
export default apiForgot;
