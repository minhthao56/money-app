import React, { useState } from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";

import "../Home/Home.scss";

import ChartLine from "../Chart/LineChart";
import Expense from "../Expense/Expense";
import Nav from "../Nav/Nav";
import CardEpense from "../CardEpense/CardEpense";
import Currency from "../Currency/Currency";
import CardTotal from "../CardTotal/CardTotal";
import CardRateWenk from "../CardTotal/CardRateWenk";
import CardRateMonth from "../CardTotal/CardRateMonth";
import CardWeatherMini from "../CardTotal/CardWeatherMini";
import ChartDoughnut from "../Chart/ChartDoughnut";

import ModalCategory from "../Expense/ModalCategory";

export default function Home(props) {
  const DarkMode = useSelector((state) => state.DarkMode);
  const [expanded, setExpanded] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const Blur = useSelector((state) => state.Blur);
  const {
    dataExpense,
    datatDataDoughnut,
    dataChatLine,
    dataChartBar,
    fetchDataBalance,
    fetchDataFetchExpense,
    fetchDataChartDoughnut,
    fetchDataChartLine,
    checkLogined,
    blurHome,
    fetchDataChartBar,
  } = props;
  const hanleOpenCategory = () => {
    setExpanded(!expanded);
    setIsBlur(true);
  };
  const hanleCloseCategory = () => {
    setExpanded(!expanded);
    setIsBlur(false);
  };

  return (
    <div className={DarkMode ? "dark" : "light"}>
      <Nav isBlur={isBlur} blurHome={blurHome} />
      {expanded ? (
        <ModalCategory hanleCloseCategory={hanleCloseCategory} />
      ) : null}
      <div id={isBlur || blurHome || Blur ? "blur" : null}>
        <div className="container-home">
          <h2 className={DarkMode ? "dark-hearder-home" : null}>Home</h2>

          <Row gutter={[16, 32]} id="row-card">
            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
              <CardTotal />
            </Col>
            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
              <CardRateWenk dataChatLine={dataChatLine} />
            </Col>
            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
              <CardRateMonth dataChartBar={dataChartBar} />
            </Col>
            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
              <CardWeatherMini />
            </Col>
          </Row>
          <Row gutter={[16, 32]}>
            <Col xs={24} sm={24} md={24} lg={14} xl={14} id="col1-home">
              <ChartLine
                dataDataChatLine={dataChatLine}
                dataDataChartBar={dataChartBar}
                checkLogined={checkLogined}
              />
              <ChartDoughnut datatDataDoughnut={datatDataDoughnut} />
            </Col>
            <Col xs={24} sm={24} md={24} lg={10} xl={10}>
              <Currency />
              <Expense
                fetchDataBalance={fetchDataBalance}
                fetchDataFetchExpense={fetchDataFetchExpense}
                fetchDataChartDoughnut={fetchDataChartDoughnut}
                fetchDataChartLine={fetchDataChartLine}
                hanleOpenCategory={hanleOpenCategory}
                fetchDataChartBar={fetchDataChartBar}
              />

              <CardEpense dataExpense={dataExpense} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
