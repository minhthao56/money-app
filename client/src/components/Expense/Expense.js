import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { deepPurple, grey } from "@material-ui/core/colors";

import { Lottie } from "@crello/react-lottie";
import animationData from "../../images/wallet-icon.json";
import "./Expense.scss";

export default function Expense(props) {
  const [valueAmount, setValueAmount] = useState("");
  const [valuaDes, setValuaDes] = useState("");
  const [isShowErr, setIsShowErr] = useState(false);
  const [isShowErrSelect, setIsShowErrSelect] = useState(false);

  const Category = useSelector((state) => state.Category);
  const Balance = useSelector((state) => state.Balance);
  const DarkMode = useSelector((state) => state.DarkMode);
  const CheckLogin = useSelector((state) => state.CheckLogin);
  const dispatch = useDispatch();

  const now = new Date();
  const [selectedDate, handleDateChange] = useState(now);

  const {
    fetchDataBalance,
    fetchDataChartLine,
    fetchDataChartDoughnut,
    fetchDataFetchExpense,
    hanleOpenCategory,
    fetchDataChartBar,
  } = props;
  const url = "https://fsklf.sse.codesandbox.io/";
  const regex = new RegExp("^[0-9]+$");

  // value amount
  const hanldeValueAmount = (e) => {
    const value = e.target.value;
    setValueAmount(value);
  };
  // value Des
  const hanldeValueDes = (e) => {
    const value = e.target.value;
    setValuaDes(value);
  };

  // handle Submit Expense
  const handleSubmitExpense = (event) => {
    event.preventDefault();
    let timeSelect = new Date(selectedDate);
    const inFoExpense = {
      des: valuaDes,
      amount: valueAmount,
      time: timeSelect,
      title: Category[0],
      color: Category[1],
      className: Category[2],
      idUser: CheckLogin.data._id,
    };
    if (regex.test(valueAmount) === false) {
      setIsShowErr(true);
    } else if (Category.length === 0) {
      setIsShowErrSelect(true);
    } else {
      setIsShowErr(false);
      setIsShowErrSelect(false);
      axios
        .post(url + "finance/expense", inFoExpense)
        .then((res) => {
          setValueAmount("");
          setValuaDes("");
          dispatch({
            type: "DELETE_CATEGORY",
          });

          return fetchDataBalance();
        })
        .then(() => {
          return fetchDataChartLine();
        })
        .then(() => {
          return fetchDataChartDoughnut();
        })
        .then(() => {
          return fetchDataFetchExpense();
        })
        .then(() => {
          return fetchDataChartBar();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
      <form onSubmit={handleSubmitExpense}>
        {isShowErr ? <span className="err-input">*Only number</span> : null}
        <div className="expense amount-expense">
          <input
            type="text"
            placeholder="0"
            value={valueAmount}
            onChange={hanldeValueAmount}
            required
            id={DarkMode ? "dark-amount-expense" : null}
          />
          <b>{CheckLogin.data && CheckLogin.data.defaultCurrency}</b>
        </div>
        {isShowErrSelect ? (
          <span className="err-input">*Let select one</span>
        ) : null}
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
            value={valuaDes}
            onChange={hanldeValueDes}
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
            Total your wallet now:{" "}
            <b>
              {Balance[2]}
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
