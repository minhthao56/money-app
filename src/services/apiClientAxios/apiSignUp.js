import axiosClient from "./index";

const apiSignUp = {
  postSign: (data) => {
    const url = "users/signup";
    return axiosClient.post(url, data);
  },
};
export default apiSignUp;
