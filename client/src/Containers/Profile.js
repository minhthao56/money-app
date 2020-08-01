import React from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import "./Profile.scss";

import { ChangeInfo, IcomeAndHistory } from "../components/Profile";

export default function Profile() {
  const Blur = useSelector((state) => state.Blur);
  const DarkMode = useSelector((state) => state.DarkMode);

  return (
    <div
      className={
        DarkMode
          ? "full-container-profile dark-full-container-profile"
          : "full-container-profile"
      }
      id={Blur ? "blur-porfile" : null}
    >
      <h2 className={DarkMode ? "dark-title light-title" : "light-title"}>
        Your Account
      </h2>
      <Row gutter={[16, 16]} className="container-profile-history">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <ChangeInfo />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <IcomeAndHistory />
        </Col>
      </Row>
    </div>
  );
}
