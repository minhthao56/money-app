import React, { useState } from "react";
import "./ChooseCurrency.scss";
import { useSelector } from "react-redux";
import axios from "axios";

import dataCurrency from "./Currency.json";
import KeyColor from "./KeyColor.json";

export default function ChooseCurrency(props) {
  const [valueChoose, setValueChoose] = useState("");
  const CheckLogin = useSelector((state) => state.CheckLogin);

  const { handleLoseChooseCurrency } = props;

  const url = "https://fsklf.sse.codesandbox.io/";

  const fullDataCurrency = [];
  for (let i = 0; i < dataCurrency.length; i++) {
    for (let j = 0; j < dataCurrency.length; j++) {
      if (i === j) {
        const assign = Object.assign(dataCurrency[i], KeyColor[j]);
        fullDataCurrency.push(assign);
      }
    }
  }
  const DarkMode = useSelector((state) => state.DarkMode);
  const hanleValueChooseCurrency = (event) => {
    const value = event.target.value;
    setValueChoose(value);
  };
  const handleSubmitChooseCurrency = (event) => {
    event.preventDefault();
    const currencyInfo = {
      idUser: CheckLogin.data._id,
      sign: valueChoose,
    };
    axios.post(url + "users/currency", currencyInfo).then((res) => {
      return handleLoseChooseCurrency();
    });
  };
  return (
    <div className="container-choose">
      <div className="main-choose" id={DarkMode ? "dark-main-choose" : null}>
        <div className="header-choose-currency">
          <div>
            <i className="fas fa-hand-holding-usd"></i>
          </div>
          <h3 id={DarkMode ? "your-currency" : null}>Your currency</h3>
        </div>
        <form onSubmit={handleSubmitChooseCurrency}>
          <div
            id={DarkMode ? "dark-form-choose" : null}
            className="form-choose"
          >
            {fullDataCurrency.map((data) => {
              return (
                <label>
                  <div
                    className="main-currency-choose"
                    id={DarkMode ? "dark-main-currency" : null}
                  >
                    <div className={"icon-sign-currency" + data.color}>
                      <span>{data.symbol_native}</span>
                    </div>
                    <b>{data.code}</b>
                    <span>{data.name}</span>
                    <input
                      type="radio"
                      name="currency"
                      style={{ marginLeft: "auto" }}
                      value={data.symbol_native}
                      onChange={hanleValueChooseCurrency}
                    />
                  </div>
                </label>
              );
            })}
          </div>
          <div
            className={
              DarkMode ? "action-choose dark-action-choose" : "action-choose"
            }
          >
            <button type="submit">CHOOSE</button>
          </div>
        </form>
      </div>
    </div>
  );
}
