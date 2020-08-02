import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
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

export default function Home() {
  const DarkMode = useSelector((state) => state.DarkMode);

  const [expanded, setExpanded] = useState(false);
  const [dataFetchChartLine, setDataFetchChartLine] = useState([]);

  const hanleCloseCategory = () => {
    setExpanded(!expanded);
  };
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

  useEffect(() => {
    apiHome.getDataChartLine().then((res) => {
      setDataFetchChartLine(res);
    });
  });

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
              moneyExpense="1000"
              defaultCurrency="$"
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <CardReport
              titleCard="Total Expense A Week"
              timeCard="Week"
              moneyExpense="1000"
              defaultCurrency="$"
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <CardReport
              titleCard="Total Expense A Month"
              timeCard="Month"
              moneyExpense="1000"
              defaultCurrency="$"
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
            />
            <ChartDoughnut />
          </Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={10}>
            <Currency />
            <Expense />
            <CardEpense />
          </Col>
        </Row>
      </div>
    </div>
  );
}
