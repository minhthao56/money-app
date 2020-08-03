import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { deepPurple, grey } from "@material-ui/core/colors";

import { Lottie } from "@crello/react-lottie";
import animationData from "../../../assets/images/wallet-icon.json";
import "./Expense.scss";

export default function Expense(props) {
  const Category = useSelector((state) => state.Category);
  const DarkMode = useSelector((state) => state.DarkMode);
  const CheckLogin = useSelector((state) => state.CheckLogin);

  const now = new Date();
  const [selectedDate, handleDateChange] = useState(now);

  const { hanleOpenCategory, balance, handleSubmitExpense } = props;

  // Validation
  const SignUpSchema = Yup.object().shape({
    amount: Yup.number().moreThan(0).required("Require"),
    des: Yup.string(),
  });
  const formik = useFormik({
    initialValues: {
      amount: "",
      des: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values, { resetForm }) => {
      return handleSubmitExpense(values, resetForm, selectedDate);
    },
  });

  // const handleSubmitExpense = (event) => {
  //   event.preventDefault();
  //   let timeSelect = new Date(selectedDate);
  //   const inFoExpense = {
  //     time: timeSelect,
  //     title: Category[0],
  //     color: Category[1],
  //     className: Category[2],
  //   };
  //   axios
  //     .post("finance/expense", inFoExpense)
  //     .then((res) => {
  //       return fetchDataBalance();
  //     })
  // };

  const materialTheme = createMuiTheme({
    palette: {
      primary: {
        main: deepPurple[100],
      },
      text: {
        primary: "rgba(0, 0, 0, 0.4)",
      },
      type: "light",
    },
    overrides: {
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: grey,
        },
      },
    },
  });
  const materialThemeDark = createMuiTheme({
    palette: {
      primary: {
        main: deepPurple[100],
      },
      type: "dark",
    },
    overrides: {
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: grey,
        },
      },
    },
  });
  return (
    <div
      className={
        DarkMode
          ? "container-form-expense dark-container-form-expense"
          : "container-form-expense"
      }
    >
      <div className="header-expense">
        <div className="icons-header-expense">
          <div>
            <i className="fas fa-money-bill-wave-alt"></i>
          </div>
          <h3 id={DarkMode ? "dark-header-expense" : null}>Expense</h3>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="expense amount-expense">
          <input
            type="text"
            placeholder="0"
            name="amount"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            id={DarkMode ? "dark-amount-expense" : null}
          />
          <b>{CheckLogin.data && CheckLogin.data.defaultCurrency}</b>
        </div>

        <div className="expense category-expense">
          <i
            className="fas fa-question-circle question-circle"
            onClick={() => {
              return hanleOpenCategory();
            }}
          ></i>
          {Category.length ? (
            <div
              className={
                DarkMode
                  ? "category-icon category-expense-icon dark-category-icon"
                  : "category-icon category-expense-icon"
              }
            >
              <div className={"icon category-color" + Category[1]}>
                <i className={Category[2]}></i>
              </div>
              <span>{Category[0]}</span>
            </div>
          ) : (
            <span onClick={hanleOpenCategory}>Select category</span>
          )}
        </div>
        <div className="expense " id="description-expense">
          <i className="fas fa-bars"></i>
          <input
            type="text"
            placeholder="Description"
            name="des"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            id={DarkMode ? "dark-amount-expense" : null}
          />
        </div>
        <div className="expense date-expense">
          <ThemeProvider theme={DarkMode ? materialThemeDark : materialTheme}>
            <KeyboardDateTimePicker
              variant="inline"
              value={selectedDate}
              onChange={handleDateChange}
              format="MM/DD/YYYY, h:mm:ss a"
              style={{ width: "100%" }}
              required
            />
          </ThemeProvider>
        </div>
        <div className="expense wallet-expense">
          <div style={{ height: 38, width: 38 }}>
            <Lottie config={{ animationData: animationData, loop: true }} />
          </div>
          <span>
            Total your wallet now:
            <b>
              {balance}
              {CheckLogin.data && CheckLogin.data.defaultCurrency}
            </b>
          </span>
        </div>
        <div className="bt-expense">
          <button id={DarkMode ? "dark-bt-expense" : null} type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
