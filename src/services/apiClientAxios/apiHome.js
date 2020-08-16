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
  getDataChartDought: () => {
    const url = "finance/get/doughnut";
    return axiosClient.get(url);
  },
  getBalance: () => {
    const url = "finance/balance";
    return axiosClient.get(url);
  },
  getExpense: () => {
    const url = "finance/get/expense";
    return axiosClient.get(url);
  },
  postExpense: (data) => {
    const url = "finance/expense";
    return axiosClient.post(url, data);
  },
};
export default apiHome;
