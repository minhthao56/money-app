import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Progress } from "antd";
import { useSelector } from "react-redux";

//config
import { backgroundColorChartDought } from "../../../config";

export default function ChartDoughnut(props) {
  const [dataChart, setDataChart] = useState({});
  const [percentAndColorChart, setPercentAndColorChart] = useState([]);
  const Balance = useSelector((state) => state.Balance);
  const CheckLogin = useSelector((state) => state.CheckLogin);
  const { dataFetchChartDought, DarkMode } = props;
  const backgroundColor = backgroundColorChartDought;

  useEffect(() => {
    if (dataFetchChartDought.length) {
      const arr = [];
      const mapDataPercent = dataFetchChartDought.map((a) => {
        return a.percentSumAmont;
      });
      const mapDataTitle = dataFetchChartDought.map((a) => {
        return a.title;
      });
      for (let i = 0; i < mapDataPercent.length; i++) {
        for (let j = 0; j < mapDataPercent.length; j++) {
          if (i === j) {
            const a = {
              strokeColor: backgroundColor[j],
              percent: dataFetchChartDought[i].percentSumAmont,
              title: dataFetchChartDought[i].title,
              className: dataFetchChartDought[i].className,
              color: dataFetchChartDought[i].color,
            };
            arr.push(a);
          }
        }
      }
      setPercentAndColorChart(arr);
      setDataChart({
        datasets: [
          {
            data: mapDataPercent,
            backgroundColor: backgroundColor,
          },
        ],
        labels: mapDataTitle,
      });
    }
  }, [dataFetchChartDought, backgroundColor]);
  return (
    <div
      className={
        DarkMode
          ? "container-doughnut dark-container-doughnut"
          : "container-doughnut"
      }
    >
      <div className="conainter-icon-doughnut">
        <div className="icon-doughnut">
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            className="bi bi-wallet2"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.5 4l10-3A1.5 1.5 0 0 1 14 2.5v2h-1v-2a.5.5 0 0 0-.5-.5L5.833 4H2.5z" />
            <path
              fillRule="evenodd"
              d="M1 5.5A1.5 1.5 0 0 1 2.5 4h11A1.5 1.5 0 0 1 15 5.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-8zM2.5 5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11z"
            />
          </svg>
        </div>
        <div className="total-exprense-doughnut">
          <span>
            <em>Total exprense</em>
          </span>
          <h3 id={DarkMode ? "dark-total-exprense-doughnut" : null}>
            {Balance[1]} {CheckLogin.defaultCurrency}
          </h3>
        </div>
      </div>

      <div className="main-chart-doughnut">
        <div>
          <div className="header-detail-total-expens">
            <div>
              <i className="fas fa-list"></i>
            </div>
            <em>Detail</em>
          </div>
          <div
            className={
              DarkMode
                ? "main-detail-donghnut dark-main-chart-doughnut"
                : "main-detail-donghnut"
            }
          >
            {percentAndColorChart.map((data, key) => {
              return (
                <div className="detail-dought" key={key}>
                  <span id="title-percent">
                    {data.title} | {data.percent}%
                  </span>
                  <Progress
                    percent={data.percent}
                    strokeColor={data.strokeColor}
                    size="small"
                    strokeWidth={5}
                    trailColor={DarkMode ? "#999999" : "#dddddd"}
                    showInfo={false}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Doughnut
          data={dataChart}
          options={{
            responsive: true,
            legend: {
              display: false,
            },
          }}
          id="doughnut-cavant"
        />
      </div>
    </div>
  );
}
