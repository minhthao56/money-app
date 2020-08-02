import React from "react";
import { Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { useFormik } from "formik";
import * as Yup from "yup";
//Icon
import ImageFinance from "../../../assets/images/finance.png";
import DarkImageFinance from "../../../assets/images/time.png";

export default function FromSignUp(props) {
  const DarkMode = JSON.parse(localStorage.getItem("dark"));
  const { handleSignUp, isErrCreateUser } = props;
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
    onSubmit: (values) => handleSignUp(values),
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
  );
}
