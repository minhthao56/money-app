import React, { useState } from "react";
import axios from "axios";

import "./Forgot.scss";

export default function ForgotPass(props) {
  const [email, setEmail] = useState();

  const { handleCloseForgotPass } = props;
  const dark = JSON.parse(localStorage.getItem("dark"));
  const url = "https://fsklf.sse.codesandbox.io/";

  // handle Value Email
  const handleValueEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  // handle Submit Fotgot Pass
  const handleSubmitFotgotPass = async (event) => {
    event.preventDefault();
    const forgotEmail = { email: email };
    const res = await axios.post(url + "users/forgot", forgotEmail);
    console.log(res.data);
    setEmail("");
  };
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
          <form onSubmit={handleSubmitFotgotPass}>
            <input
              type="email"
              placeholder="Your email"
              onChange={handleValueEmail}
              value={email}
              required
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
