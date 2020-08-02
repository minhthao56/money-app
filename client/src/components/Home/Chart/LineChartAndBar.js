import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Progress } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
//scss
import "./Chart.scss";
//constant
import { lableChartLine, lableChartBar } from "../../../config";

export default function LineChart(props) {
  //set up chart
  const [dataChartLine, setDataChartLine] = useState({});
  const [dataChartBar, setDataChartBar] = useState({});
  //Show add incom
  const [isShowAddMoney, SetIsShowAddMoney] = useState(false);
  //Show chart bar and line
  const [isShowChartLine, setIsShowChartLine] = useState(true);
  // Redux
  const CheckLogin = useSelector((state) => state.CheckLogin);
  const Balance = useSelector((state) => state.Balance);
  const DarkMode = useSelector((state) => state.DarkMode);

  const { dataFetchChartLine, dataDataChartBar, handleAddIncome } = props;

  useEffect(() => {
    setDataChartLine({
      labels: lableChartLine,
      datasets: [
        {
          label: "Expense",
          data: dataFetchChartLine,
          borderColor: "rgba(196, 161, 251, 1)",
          borderWidth: 2,
          fill: false,
          lineTension: 0.4,
          pointBackgroundColor: "rgba(0,0,0,0)",
          pointBorderColor: "rgba(0,0,0,0)",
        },
      ],
    });

    setDataChartBar({
      labels: lableChartBar,
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
  }, [dataFetchChartLine, dataDataChartBar]);

  // Validation
  const ValidationSchema = Yup.object().shape({
    amount: Yup.number().moreThan(0),
  });
  // hanlde Submit
  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm }) => handleAddIncome(values, resetForm),
  });

  // handle Show Add Money
  const handleShowAddMoney = () => {
    SetIsShowAddMoney(!isShowAddMoney);
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
                onSubmit={formik.handleSubmit}
                className={
                  isShowAddMoney ? "display-add-money" : "hidden-add-money"
                }
              >
                <input
                  type="text"
                  placeholder="Money"
                  id="amount"
                  name="amount"
                  value={formik.values.amount}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={DarkMode ? "dark-input-add-money" : null}
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
          data={dataChartLine}
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
