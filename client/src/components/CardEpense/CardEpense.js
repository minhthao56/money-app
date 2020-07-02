import React, { useState } from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import "./CardEpense.scss";

import HistortyADay from "./HistortyADay";

export default function CardEpense(props) {
  const { dataExpense } = props;
  const DarkMode = useSelector((state) => state.DarkMode);
  const CheckLogin = useSelector((state) => state.CheckLogin);
  const [sum, setSum] = useState(0);

  const handleSumForExpenseCard = (dataSum) => {
    setSum(dataSum);
  };

  return (
    <div
      className={
        DarkMode
          ? "container-card-expendse dark-card-expendse"
          : "container-card-expendse"
      }
    >
      <div className="icon-hearder-card-expense">
        <div>
          <i className="fas fa-history"></i>
        </div>
        <h3 id={DarkMode ? "History" : null}>History</h3>
      </div>
      <div
        className={
          DarkMode
            ? "main-container-time-expense dark-main-container-time-expense"
            : "main-container-time-expense"
        }
      >
        {dataExpense.map((data, key) => {
          return (
            <div className="container-time-expense" key={key}>
              <div className="time-expense">
                <div className="main-time-expense">
                  <span id="date-main">
                    <Moment format="DD">{data.time}</Moment>
                  </span>
                  <div className="sub-time">
                    <span id="calendar-expense">
                      <Moment calendar>{data.time}</Moment>
                    </span>
                    <span>
                      <Moment format="MM/YYYY">{data.time}</Moment>
                    </span>
                  </div>
                </div>
                <span>
                  {sum} {CheckLogin.data && CheckLogin.data.defaultCurrency}
                </span>
              </div>
              <HistortyADay
                data={data.data}
                handleSumForExpenseCard={handleSumForExpenseCard}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
