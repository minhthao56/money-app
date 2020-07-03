import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";
import { useSelector } from "react-redux";
import { Progress } from "antd";

import "./Chart.scss";
export default function LineChart(props) {
  const [dataChart, setDataChart] = useState({});
  const [dataChartBar, setDataChartBar] = useState({});
  const [isShowAddMoney, SetIsShowAddMoney] = useState(false);
  const [moneyAdd, setMoneyAdd] = useState("");
  const [isShowChartLine, setIsShowChartLine] = useState(true);

  const CheckLogin = useSelector((state) => state.CheckLogin);
  const Balance = useSelector((state) => state.Balance);
  const DarkMode = useSelector((state) => state.DarkMode);
  const { dataDataChatLine, dataDataChartBar, checkLogined } = props;
  const url = "https://fsklf.sse.codesandbox.io/";

  const dataChartLine = () => {
    setDataChart({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Expense",
          data: dataDataChatLine,
          borderColor: "rgba(196, 161, 251, 1)",
          borderWidth: 2,
          fill: false,
          lineTension: 0.4,
          pointBackgroundColor: "rgba(0,0,0,0)",
          pointBorderColor: "rgba(0,0,0,0)",
        },
      ],
    });
  };
  const handleDataChartBar = () => {
    setDataChartBar({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Expense",
          data: dataDataChartBar,
          backgroundColor: "rgba(196, 161, 251, 1)",
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
        },
      ],
    });
  };

  useEffect(() => {
    dataChartLine();
    handleDataChartBar();
  }, [dataDataChatLine, dataDataChartBar]);
  // handle Show Add Money
  const handleShowAddMoney = () => {
    SetIsShowAddMoney(!isShowAddMoney);
  };
  // handle Value Add Money
  const hanleVulueMoney = (e) => {
    const value = e.target.value;
    setMoneyAdd(value);
  };
  // handle Sub Add Money
  const handleSubAddMoney = (e) => {
    e.preventDefault();
    const inFoMoney = {
      amount: moneyAdd,
      idUser: CheckLogin.data._id,
    };
    axios
      .post(url + "finance/income", inFoMoney)
      .then((res) => {
        console.log(res.data);
        setMoneyAdd("");
        return checkLogined();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const hanldeShowChartLine = () => {
    setIsShowChartLine(true);
  };
  const hanldeShowChartBar = () => {
    setIsShowChartLine(false);
  };
  return (
    <div
      className={
        DarkMode ? "chart-line-home dark-chark-line" : "chart-line-home"
      }
    >
      <div className="total-line-chart">
        <div className="total">
          <div className="coin">
            <i className="fas fa-coins"></i>
          </div>
          <div className="container-balance">
            <em>Your Balance</em>
            <div className="money-total">
              <h3 id={DarkMode ? "dark-balance" : null}>
                {CheckLogin.data && CheckLogin.data.defaultCurrency}
                {Balance[2]}
              </h3>

              <div
                onClick={handleShowAddMoney}
                id={DarkMode ? "dark-fa-plus" : null}
              >
                <i className="fas fa-plus"></i>
              </div>
              <form
                onSubmit={handleSubAddMoney}
                className={
                  isShowAddMoney ? "display-add-money" : "hidden-add-money"
                }
              >
                <input
                  type="text"
                  placeholder="Money"
                  onChange={hanleVulueMoney}
                  value={moneyAdd}
                  id={DarkMode ? "dark-input-add-money" : null}
                />
                <button
                  type="submit"
                  id={DarkMode ? "dark-fa-paper-plane" : null}
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
            <span>TOTAL EXPENSE OF THIS WEEK AND MONTH </span>
          </div>
        </div>
        <div className="action-chart-line">
          <button
            className={isShowChartLine ? "bt-color-btom" : "tb-nomal"}
            onClick={hanldeShowChartLine}
            id={DarkMode ? "bt-dart-chart-line" : null}
          >
            This Week
          </button>
          <button
            className={isShowChartLine ? "tb-nomal" : "bt-color-btom"}
            onClick={hanldeShowChartBar}
            id={DarkMode ? "bt-dart-chart-line" : null}
          >
            This Month
          </button>
        </div>
      </div>
      {isShowChartLine ? (
        <Line
          data={dataChart}
          options={{
            responsive: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    beginAtZero: true,
                    fontColor: "#cccccc",
                    fontSize: 11,
                    fontStyle: "bold",
                  },
                  gridLines: {
                    display: true,
                    color: "rgba(225, 225, 225, 0.3)",
                    drawTicks: true,
                    zeroLineColor: "rgba(200, 200, 200, 0.5)",
                    borderDash: [5, 10],
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    fontColor: "#cccccc",
                    fontSize: 11,
                    fontStyle: "bold",
                  },
                },
              ],
            },
            legend: {
              display: false,
            },
          }}
        />
      ) : (
        <Bar
          data={dataChartBar}
          options={{
            responsive: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    beginAtZero: true,
                    fontColor: "#cccccc",
                    fontSize: 11,
                    fontStyle: "bold",
                  },
                  gridLines: {
                    display: true,
                    color: "rgba(225, 225, 225, 0.3)",
                    drawTicks: true,
                    zeroLineColor: "rgba(200, 200, 200, 0.5)",
                    borderDash: [5, 10],
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    fontColor: "#cccccc",
                    fontSize: 11,
                    fontStyle: "bold",
                  },
                },
              ],
            },
            legend: {
              display: false,
              position: "bottom",
              labels: {
                fontColor: "#aaa",
                fontFamily:
                  "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              },
            },
          }}
        />
      )}
      <div className="detail-chart-line">
        <span>Expense</span>
        <Progress
          percent={100}
          showInfo={false}
          size="small"
          strokeColor="#C4A1FB"
          strokeWidth={3}
          style={{ width: 100 }}
        />
      </div>
    </div>
  );
}
