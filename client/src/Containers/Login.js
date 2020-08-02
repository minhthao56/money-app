import React from "react";
import { Row, Col } from "antd";

import "./SiguUp.scss";

import { FormLogin, ImageLogin } from "../components/Login";

export default function User() {
  const DarkMode = JSON.parse(localStorage.getItem("dark"));

  return (
    <div
      className={
        DarkMode ? "containe-signup dark-containe-signup" : "containe-signup"
      }
    >
      <Row className="row-signup">
        <Col xs={24} sm={24} md={24} lg={12} xl={12} className="col22-signup">
          <FormLogin />
        </Col>
        <Col xs={0} sm={0} md={0} lg={12} xl={12}>
          <ImageLogin />
        </Col>
      </Row>
    </div>
  );
}
