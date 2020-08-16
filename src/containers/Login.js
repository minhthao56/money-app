import React, { useState } from "react";
import { Row, Col } from "antd";
import { useHistory } from "react-router-dom";
// SCSS
import "./SiguUp.scss";
//Componets
import { FormLogin, ImageLogin } from "../components/Login";
import { ForgotPassword } from "../components/Modal";
// AIP services
import apiLogin from "../services/apiClientAxios/apiLogin";

export default function User() {
  const [mesErr, setMesErr] = useState("");
  const [isErrLogin, setIsErrLogin] = useState(false);
  const [isShowForgotPass, setIsShowForgotPass] = useState(false);
  let history = useHistory();
  const DarkMode = JSON.parse(localStorage.getItem("dark"));

  // Handle Show and close pass
  const handleShowForgotPass = () => {
    setIsShowForgotPass(true);
  };
  const handleCloseForgotPass = () => {
    setIsShowForgotPass(false);
  };
  // handle Login
  const handleLogin = (values) => {
    apiLogin
      .postLogin(values)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.toString());
          window.location.replace("/");
        } else {
          history.push("/user/login");
        }
      })
      .catch((err) => {
        if (err.response === undefined) {
          console.log(err);
        } else if (err.response.status === 401) {
          setIsErrLogin(true);
          setMesErr(err.response.data.msg);
        }
      });
  };
  // handleFogotPassword
  const handleFogotPassword = (values) => {
    apiLogin.postForgot(values).then((res) => handleCloseForgotPass());
  };
  return (
    <div>
      {isShowForgotPass && (
        <ForgotPassword
          handleCloseForgotPass={handleCloseForgotPass}
          handleFogotPassword={handleFogotPassword}
        />
      )}
      <div
        className={
          DarkMode ? "containe-signup dark-containe-signup" : "containe-signup"
        }
      >
        <Row className="row-signup">
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="col22-signup">
            <FormLogin
              handleShowForgotPass={handleShowForgotPass}
              handleLogin={handleLogin}
              mesErr={mesErr}
              isErrLogin={isErrLogin}
            />
          </Col>
          <Col xs={0} sm={0} md={0} lg={12} xl={12}>
            <ImageLogin />
          </Col>
        </Row>
      </div>
    </div>
  );
}
