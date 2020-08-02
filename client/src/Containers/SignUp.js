import React, { useState } from "react";
import { Row, Col } from "antd";
import { useHistory } from "react-router-dom";
// components
import { ImageSignUp, FromSignUp } from "../components/SignUp";
//scss
import "./SiguUp.scss";
//AIP
import apiSignUp from "../services/apiClientAxios/apiSignUp";

export default function User() {
  const [isErrCreateUser, setIsErrCreateUser] = useState(false);
  const DarkMode = JSON.parse(localStorage.getItem("dark"));
  let history = useHistory();

  const handleSignUp = (values) => {
    apiSignUp
      .postSign(values)
      .then((res) => {
        history.push("/user/login");
      })
      .catch((err) => {
        if (err.response === undefined) {
          console.log(err);
        } else if (err.response.status === 400) {
          setIsErrCreateUser(true);
          console.log(err.response.data.msg);
        }
      });
  };

  return (
    <div
      className={
        DarkMode ? "containe-signup dark-containe-signup" : "containe-signup"
      }
    >
      <Row className="row-signup">
        <Col xs={0} sm={0} md={0} lg={12} xl={12}>
          <ImageSignUp
            handleSignUp={handleSignUp}
            isErrCreateUser={isErrCreateUser}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} className="col22-signup">
          <FromSignUp />
        </Col>
      </Row>
    </div>
  );
}
