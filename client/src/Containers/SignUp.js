import React from "react";
import { Row, Col } from "antd";

import { ImageSignUp, FromSignUp } from "../components/SignUp";

import "./SiguUp.scss";

export default function User() {
  const DarkMode = JSON.parse(localStorage.getItem("dark"));

  return (
    <div
      className={
        DarkMode ? "containe-signup dark-containe-signup" : "containe-signup"
      }
    >
      <Row className="row-signup">
        <Col xs={0} sm={0} md={0} lg={12} xl={12}>
          <ImageSignUp />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} className="col22-signup">
          <FromSignUp />
        </Col>
      </Row>
    </div>
  );
}
