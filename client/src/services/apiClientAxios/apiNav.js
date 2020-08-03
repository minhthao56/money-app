import axiosClient from "./index";

const apiNav = {
  getDataUser: () => {
    const url = "users/checklogin";
    return axiosClient.get(url);
  },
};
export default apiNav;
