import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import "./Curency.scss";

import VN from "../../images/vietnam.png";
import US from "../../images/united states.png";
import JP from "../../images/japan.png";

export default function Currency() {
  const [dataCurrency, setDataCurrency] = useState(0);
  const [timeCurrency, setTimeCurrency] = useState("");
  const DarkMode = useSelector((state) => state.DarkMode);
  const fetchDataCurrency = async () => {
    const res = await axios.get(
      "http://data.fixer.io/api/latest?access_key=e3aa50ac698a6df4b1daf305b103764c"
    );
    setDataCurrency(res.data.rates);
    setTimeCurrency(res.data.date);
  };
  useEffect(() => {
    fetchDataCurrency();
  }, []);

  const VND = dataCurrency.VND && dataCurrency.VND.toFixed(1);
  const USD = dataCurrency.USD && dataCurrency.USD.toFixed(1);
  const JPY = dataCurrency.JPY && dataCurrency.JPY.toFixed(1);

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
            <i className="fas fa-clock icon-clock"></i> {timeCurrency}
          </span>
        </div>

        <div className="main-currency">
          <span>
            <b>VND</b>{" "}
          </span>
          <span style={{ color: "#aaaaaa" }}>1 EUR = {VND} ₫</span>
          <img src={VN} alt="" />
        </div>
        <div className="main-currency">
          <span>
            <b>USD</b>
          </span>
          <span style={{ color: "#aaaaaa" }}>1 EUR = {USD} $</span>
          <img src={US} alt="" />
        </div>
        <div className="main-currency">
          <span>
            <b>JPY</b>{" "}
          </span>
          <span style={{ color: "#aaaaaa" }}>1 EUR = {JPY} ¥</span>
          <img src={JP} alt="" />
        </div>
      </div>
    </div>
  );
}
