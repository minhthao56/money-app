import axiosClient from "./index";

const apiHome = {
  postAddIncome: (data) => {
    const url = "finance/income";
    return axiosClient.post(url, data);
  },
  getDataChartLine: () => {
    const url = "finance/get/chartline";
    return axiosClient.get(url);
  },
  getDataChartBar: () => {
    const url = "finance/get/chartbar";
    return axiosClient.get(url);
  },
};
export default apiHome;
