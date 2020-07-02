import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Moment from "react-moment";

import "./Curency.scss";

import VN from "../../images/vietnam.png";
import EU from "../../images/world.png";
import JP from "../../images/japan.png";

export default function Currency() {
  const [dataCurrency, setDataCurrency] = useState(0);
  const DarkMode = useSelector((state) => state.DarkMode);
  const fetchDataCurrency = async () => {
    const res = await axios.get(
      "https://openexchangerates.org/api/latest.json?app_id=8c8f0dfb556a43b9bbfced404737f02a"
    );
    setDataCurrency(res.data.rates);
  };
  useEffect(() => {
    fetchDataCurrency();
  }, []);

  const VND = dataCurrency.VND && dataCurrency.VND.toFixed(1);
  const EUR = dataCurrency.EUR && dataCurrency.EUR.toFixed(1);
  const JPY = dataCurrency.JPY && dataCurrency.JPY.toFixed(1);
  const time = new Date();

  return (
    <div
      className={
        DarkMode ? "container-currency dark-currency" : "container-currency"
      }
    >
      <div className="container-main-currency">
        <div className="header-currency">
          <div className="icon-header-currency">
            <div className="bg-icon-header-currency">
              <i className="fas fa-euro-sign"></i>
            </div>
            <h3 id={DarkMode ? "dart-header-currency" : null}>Currency</h3>
          </div>

          <span>
            <i className="fas fa-clock icon-clock"></i>{" "}
            <Moment format="DD/MM/YYYY">{time}</Moment>
          </span>
        </div>

        <div className="main-currency">
          <span>
            <b>VND</b>{" "}
          </span>
          <span style={{ color: "#aaaaaa" }}>1 USD = {VND} ₫</span>
          <img src={VN} alt="" />
        </div>
        <div className="main-currency">
          <span>
            <b>EUR</b>
          </span>
          <span style={{ color: "#aaaaaa" }}>1 USD = {EUR} €</span>
          <img src={EU} alt="" />
        </div>
        <div className="main-currency">
          <span>
            <b>JPY</b>{" "}
          </span>
          <span style={{ color: "#aaaaaa" }}>1 USD = {JPY} ¥</span>
          <img src={JP} alt="" />
        </div>
      </div>
    </div>
  );
}
