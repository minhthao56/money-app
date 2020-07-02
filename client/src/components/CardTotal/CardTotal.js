import React from "react";
import { useSelector } from "react-redux";
import "./CardTotal.scss";

export default function CardTotal() {
  const Balance = useSelector((state) => state.Balance);
  const CheckLogin = useSelector((state) => state.CheckLogin);
  return (
    <div className="container-card-total">
      <div className="header-card-total">
        <h3>Total Expense One Day</h3>
      </div>
      <div className="main-card-total">
        <div className="icon-card-total ">
          <i className="fas fa-funnel-dollar"></i>
        </div>
        <div className="money-card-total">
          <span>
            <b>Today</b>
          </span>
          <span className="money-sub-card">
            {Balance[4]}
            {CheckLogin.data && CheckLogin.data.defaultCurrency}
          </span>
        </div>
      </div>
    </div>
  );
}
