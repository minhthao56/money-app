import React, { useState } from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";

import "./Home.scss";

import {
  ChartLine,
  ChartDoughnut,
  CardEpense,
  CardRateMonth,
  CardRateWenk,
  CardTotal,
  CardWeatherMini,
  Currency,
  Expense,
} from "../components/Home";

import { ModalCategory } from "../components/Modal";

export default function Home() {
  const DarkMode = useSelector((state) => state.DarkMode);
  const [expanded, setExpanded] = useState(false);

  const hanleCloseCategory = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={DarkMode ? "dark" : "light"}>
      {expanded ? (
        <ModalCategory hanleCloseCategory={hanleCloseCategory} />
      ) : null}
      <div className="container-home">
        <h2 className={DarkMode ? "dark-hearder-home" : null}>Home</h2>
        <Row gutter={[16, 32]} id="row-card">
          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <CardTotal />
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <CardRateWenk />
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <CardRateMonth />
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <CardWeatherMini />
          </Col>
        </Row>
        <Row gutter={[16, 32]}>
          <Col xs={24} sm={24} md={24} lg={14} xl={14} id="col1-home">
            <ChartLine />
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
