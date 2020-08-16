import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// scss
import "./Forgot.scss";

export default function ForgotPass(props) {
  const { handleCloseForgotPass, handleFogotPassword } = props;
  const dark = JSON.parse(localStorage.getItem("dark"));
  // Validation
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6).max(10),
  });
  // hanlde Submit
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => handleFogotPassword(values),
  });

  return (
    <div className="container-form-fogot">
      <div
        className={
          dark ? "main-form-fotgot dark-main-form-fotgot" : "main-form-fotgot"
        }
      >
        <div className="container-header-forgot">
          <div>
            <i className="fas fa-question"></i>
          </div>
          <h3>Forgot Password</h3>
          <i
            className="fas fa-times icon-times"
            onClick={() => {
              return handleCloseForgotPass();
            }}
          ></i>
        </div>
        <div className="form-send-address">
          <form onSubmit={formik.handleSubmit}>
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
            <div
              className={
                dark
                  ? "action-forgot-pass dark-action-forgot-pass"
                  : "action-forgot-pass"
              }
            >
              <button className="bt-send-pass" type="submit">
                Send
              </button>
              <button
                className="cancel-send-mail bt-send-pass"
                type="button"
                onClick={() => {
                  return handleCloseForgotPass();
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
