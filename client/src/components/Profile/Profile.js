import React, { useState } from "react";
import { Row, Col } from "antd";
import "./Profile.scss";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import axios from "axios";

import Nav from "../Nav/Nav";
import ImageProfile from "../../images/selfie.svg";

export default function Profile(props) {
  const [isChange, setIsChange] = useState(false);
  const [number, setNumber] = useState(0);
  const [valueName, setValueName] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valuePass, setValuePass] = useState("");
  const [file, setFile] = useState(null);
  const [valueMoney, setValueMoney] = useState("");

  const CheckLogin = useSelector((state) => state.CheckLogin);
  const Balance = useSelector((state) => state.Balance);
  const Blur = useSelector((state) => state.Blur);

  const { dataIcome, checkLogined } = props;
  const url = "https://fsklf.sse.codesandbox.io/";
  const DarkMode = useSelector((state) => state.DarkMode);

  const handleChangeInfo = (num) => {
    if (num === 1) {
      setIsChange(!isChange);
      setNumber(1);
    }
    if (num === 2) {
      setIsChange(!isChange);
      setNumber(2);
    }
    if (num === 3) {
      setIsChange(!isChange);
      setNumber(3);
    }
  };
  // Update user
  const handleFile = (event) => {
    const value = event.target.files[0];
    setFile(value);
  };
  const handleName = (event) => {
    const value = event.target.value;
    setValueName(value);
  };
  const handleEmail = (event) => {
    const value = event.target.value;
    setValueEmail(value);
  };
  const handlePass = (event) => {
    const value = event.target.value;
    setValuePass(value);
  };
  const handleSumitInfo = (event) => {
    event.preventDefault();
    const fd = new FormData();
    fd.append("file", file);
    fd.append("_id", CheckLogin.data._id);
    fd.append("name", valueName);
    fd.append("email", valueEmail);
    fd.append("pass", valuePass);
    axios
      .post(url + "users/update", fd)
      .then((res) => {
        console.log(res.data);
        setValueMoney("");
        return checkLogined();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Add money
  const handlChangeMoney = (event) => {
    const value = event.target.value;
    setValueMoney(value);
  };
  const handleSubmitMoney = (event) => {
    event.preventDefault();
    const inFoMoney = {
      amount: valueMoney,
      idUser: CheckLogin.data._id,
    };

    axios
      .post(url + "finance/income", inFoMoney)
      .then((res) => {
        console.log(res.data);
        setValueMoney("");
        return checkLogined();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Nav />
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
            <div className="profile" id={DarkMode ? "dark-profile" : null}>
              <div className="header-profile">
                <i class="fas fa-user-edit user-edit"></i>
                <h3 id={DarkMode ? "dark-title" : null}>Your profile</h3>
              </div>
              <form onSubmit={handleSumitInfo}>
                <div className="container-avatar-profile">
                  <div>
                    <label>
                      <div
                        className="avatar-profile"
                        style={{
                          backgroundImage: `url(${
                            CheckLogin.data && CheckLogin.data.avatarUrl
                          })`,
                        }}
                      >
                        <div>
                          <i className="fas fa-camera"></i>
                        </div>
                      </div>
                      <input
                        type="file"
                        className="input-file-profile"
                        onChange={handleFile}
                      />
                    </label>
                  </div>

                  <img
                    src={ImageProfile}
                    style={{ width: 200, marginLeft: "auto" }}
                    alt=""
                  />
                </div>
                <div className="input-profile">
                  <div className="container-icon-input">
                    <div>
                      <i className="fas fa-user"></i>
                    </div>
                    <span> {CheckLogin.data && CheckLogin.data.name}</span>
                    <button
                      type="button"
                      onClick={() => {
                        return handleChangeInfo(1);
                      }}
                    >
                      Change
                    </button>
                  </div>
                  {isChange && number === 1 ? (
                    <input
                      type="text"
                      value={valueName}
                      onChange={handleName}
                      id={DarkMode ? "dark-input" : null}
                    />
                  ) : null}

                  <div className="container-icon-input">
                    <div id="mail-profile">
                      <i className="fas fa-envelope-open"></i>
                    </div>
                    <span>{CheckLogin.data && CheckLogin.data.email}</span>
                    <button
                      type="button"
                      onClick={() => {
                        return handleChangeInfo(2);
                      }}
                    >
                      Change
                    </button>
                  </div>
                  {isChange && number === 2 ? (
                    <input
                      type="text"
                      value={valueEmail}
                      onChange={handleEmail}
                      id={DarkMode ? "dark-input" : null}
                    />
                  ) : null}

                  <div className="container-icon-input">
                    <div id="pass-profile">
                      <i className="fas fa-lock"></i>
                    </div>
                    <span>Your Password</span>
                    <button
                      type="button"
                      onClick={() => {
                        return handleChangeInfo(3);
                      }}
                    >
                      Change
                    </button>
                  </div>
                  {isChange && number === 3 ? (
                    <input
                      type="text"
                      value={valuePass}
                      onChange={handlePass}
                      id={DarkMode ? "dark-input" : null}
                    />
                  ) : null}
                </div>
                <div className="bt-profile">
                  <button
                    type="submit"
                    id={DarkMode ? "dark-bt-profile" : null}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div
              className="history-profile"
              id={DarkMode ? "dark-profile" : null}
            >
              <div className="header-history-profile">
                <i className="fas fa-credit-card icon-credit-card"></i>
                <h3 id={DarkMode ? "dark-title" : null}>Your wallet</h3>
              </div>

              <div className="container-card-wallet">
                <div className="card-wallet">
                  <form
                    className="plus-income-wallet"
                    onSubmit={handleSubmitMoney}
                  >
                    <button type="submit">
                      <i className="fas fa-plus"></i>
                    </button>
                    <input
                      type="text"
                      placeholder="Add income"
                      value={valueMoney}
                      onChange={handlChangeMoney}
                    />
                  </form>
                  <div className="money-wallet-balance">
                    <div className="balance-wallet">
                      <div>
                        <i className="fab fa-google-wallet"></i>
                      </div>

                      <span>
                        Balance: {Balance[2]}
                        {CheckLogin.data && CheckLogin.data.defaultCurrency}
                      </span>
                    </div>
                  </div>
                  <div className="money-wallet">
                    <div>
                      <i className="fas fa-coins"></i>
                    </div>
                    <span>Total income</span>
                    <span style={{ marginLeft: "auto" }}>
                      {Balance[0]}
                      {CheckLogin.data && CheckLogin.data.defaultCurrency}
                    </span>
                  </div>
                  <div className="money-wallet">
                    <div>
                      <i className="far fa-money-bill-alt"></i>
                    </div>
                    <span>Total enpense</span>
                    <span style={{ marginLeft: "auto" }}>
                      {Balance[1]}
                      {CheckLogin.data && CheckLogin.data.defaultCurrency}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="header-history-income">
                  <span>History income</span>
                </div>
                <div
                  className={
                    DarkMode
                      ? "full-container-history-income dark-full-container-history-income"
                      : "full-container-history-income"
                  }
                >
                  {dataIcome.map((data, key) => {
                    return (
                      <div className="container-history-income" key={key}>
                        <div className="icon-income-wallet">
                          <svg
                            width="0.9em"
                            height="0.9em"
                            viewBox="0 0 16 16"
                            className="bi bi-graph-up"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0h1v16H0V0zm1 15h15v1H1v-1z" />
                            <path
                              fill-rule="evenodd"
                              d="M14.39 4.312L10.041 9.75 7 6.707l-3.646 3.647-.708-.708L7 5.293 9.959 8.25l3.65-4.563.781.624z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4h-3.5a.5.5 0 0 1-.5-.5z"
                            />
                          </svg>
                        </div>
                        <span>
                          <Moment format="DD/MM/YYYY">{data.time}</Moment>
                        </span>
                        <span style={{ marginLeft: "auto" }}>
                          {data.amount}
                          {CheckLogin.data && CheckLogin.data.defaultCurrency}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
