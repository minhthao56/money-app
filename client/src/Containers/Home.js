import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
//scss
import "./Home.scss";
// components
import {
  LineChartAndBar,
  ChartDoughnut,
  CardEpense,
  Currency,
  Expense,
  CardReport,
  CardWeatherMini,
} from "../components/Home";
import { ModalCategory } from "../components/Modal";
// API
import apiHome from "../services/apiClientAxios/apiHome";
// helpers
import { sumExpenseWeek } from "../helpers/sumExpenseWeek";

export default function Home() {
  //Redux
  const DarkMode = useSelector((state) => state.DarkMode);
  const Category = useSelector((state) => state.Category);
  const Balance = useSelector((state) => state.Balance);
  const dispatch = useDispatch();

  //State
  const [expanded, setExpanded] = useState(false);
  const [dataFetchChartLine, setDataFetchChartLine] = useState([]);
  const [dataFetchChartBar, setDataFetchChartBar] = useState([]);
  const [dataFetchChartDought, setDataFetchChartDought] = useState([]);

  const [sumWeek, setSumWeek] = useState(0);
  const [dataListExpense, setDataListExpense] = useState([]);

  //handle Add Income
  const handleAddIncome = (values, resetForm) => {
    apiHome
      .postAddIncome(values)
      .then((res) => resetForm({ values: "" }))
      .catch((err) => {
        if (err.response === undefined) {
          console.log(err);
        } else if (err.response.status === 400) {
          console.log(err.response.data.msg);
        }
      });
  };

  // Fecth Data
  const fetchDataHome = () => {
    apiHome.getDataChartLine().then((res) => {
      setDataFetchChartLine(res);
      setSumWeek(sumExpenseWeek(res));
    });
    apiHome.getDataChartBar().then((res) => {
      setDataFetchChartBar(res);
    });
    apiHome.getDataChartDought().then((res) => {
      setDataFetchChartDought(res);
    });
    apiHome.getBalance().then((res) => {
      dispatch({
        type: "BALANCE",
        action: res,
      });
    });
    apiHome.getExpense().then((res) => {
      setDataListExpense(res);
    });
  };
  // hanle Open Category
  const hanleOpenCategory = () => {
    setExpanded(!expanded);
  };
  const hanleCloseCategory = () => {
    setExpanded(!expanded);
  };
  // handle Submit Expense
  const handleSubmitExpense = (values, resetForm, selectedDate) => {
    let timeSelect = new Date(selectedDate);
    const inFoExpense = {
      time: timeSelect,
      title: Category[0],
      color: Category[1],
      className: Category[2],
      amount: values.amount,
      des: values.des,
    };
    apiHome.postExpense(inFoExpense).then((res) => {
      dispatch({
        type: "DELETE_CATEGORY",
      });
      resetForm({ values: "" });
      return fetchDataHome();
    });
  };
  // useEffect
  useEffect(() => {
    fetchDataHome();
    //eslint-disable-next-line
  }, []);

  return (
    <div className={DarkMode ? "dark" : "light"}>
      {expanded ? (
        <ModalCategory hanleCloseCategory={hanleCloseCategory} />
      ) : null}
      <div className="container-home">
        <h2 className={DarkMode ? "dark-hearder-home" : null}>Home</h2>
        <Row gutter={[16, 32]} id="row-card">
          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <CardReport
              titleCard="Total Expense A Day"
              timeCard="Today"
              moneyExpense={Balance[4]}
              defaultCurrency="$"
              cardType=""
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <CardReport
              titleCard="Total Expense A Week"
              timeCard="Week"
              moneyExpense={sumWeek}
              defaultCurrency="$"
              cardType="card-week"
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <CardReport
              titleCard="Total Expense A Month"
              timeCard="Month"
              moneyExpense={Balance[3]}
              defaultCurrency="$"
              cardType="card-month"
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <CardWeatherMini />
          </Col>
        </Row>
        <Row gutter={[16, 32]}>
          <Col xs={24} sm={24} md={24} lg={14} xl={14} id="col1-home">
            <LineChartAndBar
              handleAddIncome={handleAddIncome}
              dataFetchChartLine={dataFetchChartLine}
              dataFetchChartBar={dataFetchChartBar}
              balance={Balance[2]}
            />
            <ChartDoughnut dataFetchChartDought={dataFetchChartDought} />
          </Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={10}>
            <Currency />
            <Expense
              hanleOpenCategory={hanleOpenCategory}
              balance={Balance[2]}
              handleSubmitExpense={handleSubmitExpense}
            />
            <CardEpense dataListExpense={dataListExpense} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
