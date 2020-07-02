import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

import ImageFinance from "../../images/finance.png";
import DarkImageFinance from "../../images/time.png";
import WellCome from "../../images/Wellcome.svg";
import "./SiguUp.scss";
export default function User() {
  const [valueName, setValueName] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  const [isErrEmail, setIsErrEmail] = useState(false);
  const [isErrName, setIsErrName] = useState(false);
  const [isErrPass, setIsErrPass] = useState(false);
  const [msgErrEmail, setMsgErrEmail] = useState("");
  const [msgErrName, setMsgErrName] = useState("");
  const [msgErrPass, setMsgErrPass] = useState("");

  const [isErrCreateUser, setIsErrCreateUser] = useState(false);

  const DarkMode = JSON.parse(localStorage.getItem("dark"));
  const url = "https://fsklf.sse.codesandbox.io/";
  let history = useHistory();

  const validationEmail = new RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
    "g"
  );
  const validationName = new RegExp(
    /[A-Z a-z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/,
    "g"
  );
  const validationCharacter = new RegExp(/^[a-zA-Z0-9!@#$%^&*()_+]+$/, "g");

  const handleChangeName = (event) => {
    const value = event.target.value;

    setValueName(value);
  };
  const handleChangeEmail = (event) => {
    const value = event.target.value;
    setValueEmail(value);
  };
  const handleChangePasword = (event) => {
    const value = event.target.value;
    setValuePassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validationEmail.test(valueEmail) === false) {
      console.log(validationEmail.test(valueEmail));

      setIsErrEmail(true);
      setMsgErrEmail("Email Invaid");
    } else if (validationName.test(valueName) === false) {
      setIsErrEmail(false);
      setIsErrName(true);
      setMsgErrName("Name Inclue number and letter");
    } else if (
      valuePassword.length < 8 &&
      validationCharacter.test(valuePassword)
    ) {
      setIsErrEmail(false);
      setIsErrName(false);
      setIsErrPass(true);
      setMsgErrPass("Your password is at lest 8 characters");
    } else {
      const user = {
        name: valueName,
        email: valueEmail,
        password: valuePassword,
      };

      axios
        .post(url + "users/signup", user)
        .then((res) => {
          setValueName("");
          setValueEmail("");
          setValuePassword("");
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
    }
  };
  return (
    <div
      className={
        DarkMode ? "containe-signup dark-containe-signup" : "containe-signup"
      }
    >
      <Row className="row-signup">
        <Col xs={0} sm={0} md={0} lg={12} xl={12}>
          <div className="col1-signup">
            <img src={WellCome} alt="" className="wellcome-signup" />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} className="col22-signup">
          <div className="col2-signup">
            <div
              className="contaiter-form"
              id={DarkMode ? "dark-contaiter-form" : null}
            >
              <div className="logo-signup">
                <img src={DarkMode ? DarkImageFinance : ImageFinance} alt="" />
                <h1 className={DarkMode ? "title-money-login" : null}>money</h1>
              </div>
              {isErrCreateUser === true ? (
                <Alert severity="error">Email already exists</Alert>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  {isErrName ? (
                    <span className="msg-err">*{msgErrName}</span>
                  ) : null}
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={valueName}
                    onChange={handleChangeName}
                    required
                  />
                </div>
                <div className="form-group">
                  {isErrEmail ? (
                    <span className="msg-err">*{msgErrEmail}</span>
                  ) : null}
                  <input
                    type="email"
                    name="email"
                    value={valueEmail}
                    placeholder="Email"
                    onChange={handleChangeEmail}
                    required
                  />
                </div>
                <div className="form-group">
                  {isErrPass ? (
                    <span className="msg-err">*{msgErrPass}</span>
                  ) : null}
                  <input
                    type="password"
                    name="password"
                    value={valuePassword}
                    placeholder="Password"
                    onChange={handleChangePasword}
                    required
                  />
                </div>
                <button type="submit" id={DarkMode ? "bt-login" : null}>
                  Sign up
                </button>
              </form>
              <p className="policy">
                By signing up, you agree to our{" "}
                <b>Terms , Data Policy and Cookies Policy .</b>
              </p>
            </div>
            <div
              className="have-account"
              id={DarkMode ? "dark-contaiter-form" : null}
            >
              <span>
                Have an account?{" "}
                <Link to="/user/login">
                  <b>Log in</b>
                </Link>
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
