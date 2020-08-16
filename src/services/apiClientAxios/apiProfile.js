import axiosClient from "./index";

const apiChangUser = {
  postChangeDataUser: (data) => {
    const url = "users/update";
    return axiosClient.post(url, data);
  },
  getIcome: () => {
    const url = "finance/income";
    return axiosClient.get(url);
  },
};
export default apiChangUser;
