import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Alert } from "antd";
// Icon
import ImageFinance from "../../../assets/images/finance.png";
import DarkImageFinance from "../../../assets/images/time.png";

export default function FormLogin(props) {
  const { handleShowForgotPass, handleLogin, isErrLogin, mesErr } = props;
  const DarkMode = JSON.parse(localStorage.getItem("dark"));
  // Validation
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6).max(10),
  });
  // hanlde Submit
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => handleLogin(values),
  });
  return (
    <div className="col2-signup">
      <div
        className="contaiter-form"
        id={DarkMode ? "dark-contaiter-form" : null}
      >
        <div className="logo-signup">
          <img src={DarkMode ? DarkImageFinance : ImageFinance} alt="" />
          <h1 className={DarkMode ? "title-money-login" : null}>money</h1>
        </div>
        {isErrLogin === true ? (
          <Alert
            style={{ marginBottom: 10 }}
            message={mesErr}
            type="error"
            showIcon
          />
        ) : null}
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <span>minhthao5648@gmail.com</span>
            <br />
            <span className="msg-err">
              {formik.touched.email && formik.errors.email}
            </span>
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.errors.email ? "err-validation" : null}
            />
          </div>
          <div className="form-group">
            <span>12345678</span>
            <br />
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
              className={formik.errors.password ? "err-validation" : null}
            />
          </div>
          <button type="submit" id={DarkMode ? "bt-login" : null}>
            Login
          </button>
          <div className="forgot-pass">
            <span onClick={() => handleShowForgotPass()}>
              I Forgot My Password
            </span>
          </div>
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
          Haven't an account?
          <Link to="/user/signup">
            <b>Sign Up</b>
          </Link>
        </span>
        {/* {isShowForgotPass ? (
          <ForgotPass handleCloseForgotPass={handleCloseForgotPass} />
        ) : null} */}
      </div>
    </div>
  );
}
