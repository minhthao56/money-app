import axios from "axios";
import queryString from "query-string";

// const token = localStorage.getItem("token");

const axiosClient = axios.create({
  baseURL: "https://be-money.herokuapp.com/",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.response.use(
  (res) => {
    if (res && res.data) {
      return res.data;
    }
    return res;
  },
  (err) => {
    throw err;
  }
);
export default axiosClient;
