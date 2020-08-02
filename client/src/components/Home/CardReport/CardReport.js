import React from "react";
import "./CardTotal.scss";
import "../../../assets/weather-icons/css/weather-icons.css";

export default function CardRateMonth(props) {
  const { titleCard, timeCard, moneyExpense, defaultCurrency } = props;

  return (
    <div className="container-card-total card-month">
      <div className="header-card-total">
        <h3>{titleCard}</h3>
      </div>
      <div className="main-card-total">
        <div className="icon-card-total">
          <i className="far fa-calendar-check"></i>
        </div>
        <div className="money-card-total">
          <span>
            <b>{timeCard}</b>
          </span>
          <span className="money-sub-card">
            {moneyExpense}
            {defaultCurrency}
          </span>
        </div>
      </div>
    </div>
  );
}
