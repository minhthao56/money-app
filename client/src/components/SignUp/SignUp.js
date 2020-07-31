import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { Row, Col } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";

import "antd/dist/antd.css";

import ImageFinance from "../../images/finance.png";
import DarkImageFinance from "../../images/time.png";
import WellCome from "../../images/Wellcome.svg";
import "./SiguUp.scss";

export default function User() {
  const [isErrCreateUser, setIsErrCreateUser] = useState(false);

  const DarkMode = JSON.parse(localStorage.getItem("dark"));
  const url = "https://be-money.herokuapp.com/";
  let history = useHistory();

  // Validation
  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6).max(10).required("Required"),
    name: Yup.string().min(4).max(15).required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      axios
        .post(url + "users/signup", values)
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
    },
  });

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

              <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <span className="msg-err">
                    {formik.touched.name && formik.errors.name}
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    id="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    className={
                      formik.touched.name && formik.errors.name
                        ? "err-validation"
                        : null
                    }
                  />
                </div>
                <div className="form-group">
                  <span className="msg-err">
                    {formik.touched.email && formik.errors.email}
                  </span>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    className={
                      formik.touched.email && formik.errors.email
                        ? "err-validation"
                        : null
                    }
                  />
                </div>
                <div className="form-group">
                  <span className="msg-err">
                    {formik.touched.password && formik.errors.password}
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    className={
                      formik.touched.password && formik.errors.password
                        ? "err-validation"
                        : null
                    }
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
