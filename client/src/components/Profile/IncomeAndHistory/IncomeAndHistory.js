import React from "react";
import { useSelector } from "react-redux";
import Moment from "react-moment";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function IncomeAndHistory(props) {
  const Balance = useSelector((state) => state.Balance);
  const DarkMode = useSelector((state) => state.DarkMode);

  const { CheckLogin, handleSubmitAddMoney, dataIcome } = props;

  // Validation
  const SignUpSchema = Yup.object().shape({
    amount: Yup.number("Only number").moreThan(0, "More then 0"),
  });
  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => handleSubmitAddMoney(values),
  });

  return (
    <div className="history-profile" id={DarkMode ? "dark-profile" : null}>
      <div className="header-history-profile">
        <i className="fas fa-credit-card icon-credit-card"></i>
        <h3 id={DarkMode ? "dark-title" : null}>Your wallet</h3>
      </div>

      <div className="container-card-wallet">
        <div className="card-wallet">
          <form className="plus-income-wallet" onSubmit={formik.handleSubmit}>
            <span className="msg-err">
              {formik.touched.amount && formik.errors.amount}
            </span>
            <button type="submit">
              <i className="fas fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Money"
              id="amount"
              name="amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </form>
          <div className="money-wallet-balance">
            <div className="balance-wallet">
              <div>
                <i className="fab fa-google-wallet"></i>
              </div>

              <span>
                Balance: {Balance[2]}
                {CheckLogin.defaultCurrency}
              </span>
            </div>
          </div>
          <div className="money-wallet">
            <div>
              <i className="fas fa-coins"></i>
            </div>
            <span>Total income</span>
            <span style={{ marginLeft: "auto" }}>
              {Balance[0]}
              {CheckLogin.defaultCurrency}
            </span>
          </div>
          <div className="money-wallet">
            <div>
              <i className="far fa-money-bill-alt"></i>
            </div>
            <span>Total enpense</span>
            <span style={{ marginLeft: "auto" }}>
              {Balance[1]}
              {CheckLogin.defaultCurrency}
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="header-history-income">
          <span>History income</span>
        </div>
        <div
          className={
            DarkMode
              ? "full-container-history-income dark-full-container-history-income"
              : "full-container-history-income"
          }
        >
          {dataIcome &&
            dataIcome.map((data, key) => {
              return (
                <div className="container-history-income" key={key}>
                  <div className="icon-income-wallet">
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 16 16"
                      className="bi bi-graph-up"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h1v16H0V0zm1 15h15v1H1v-1z" />
                      <path
                        fillRule="evenodd"
                        d="M14.39 4.312L10.041 9.75 7 6.707l-3.646 3.647-.708-.708L7 5.293 9.959 8.25l3.65-4.563.781.624z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4h-3.5a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                  </div>
                  <span>
                    <Moment format="DD/MM/YYYY">{data.time}</Moment>
                  </span>
                  <span style={{ marginLeft: "auto" }}>
                    {data.amount}
                    {CheckLogin.defaultCurrency}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
