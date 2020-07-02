import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import ChooseCurrency from "./components/ChooseCurrency/ChooseCurrency";

export default function App() {
  const [dataFinance, setDataFinance] = useState();
  const [dataExpense, setDataExpense] = useState([]);
  const [datatDataDoughnut, setDatatDataDoughnut] = useState([]);
  const [dataChatLine, setDataChartLine] = useState([]);
  const [dataChartBar, setDataChartBar] = useState([]);
  const [dataIcome, setDataIncome] = useState([]);
  const [isLoseCurrency, setIsLoseCurrency] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);

  const [blurHome, setBlurHome] = useState(false);

  const dispatch = useDispatch();

  const url = "https://fsklf.sse.codesandbox.io/";
  const token = localStorage.getItem("token");

  //  check login
  const checkLogined = () => {
    axios
      .post(url + "users/checklogin", { token })
      .then((res) => {
        dispatch({
          type: "CHECK_LOGGED",
          data: res.data,
        });
        handleLoseChooseCurrencyByData(res.data);
        setDataFinance(res.data);
        fetchDataBalance(res.data._id);
        fetchDataFetchExpense(res.data._id);
        fetchDataChartDoughnut(res.data._id);
        fetchDataChartLine(res.data._id);
        fetchDataChartBar(res.data._id);
        fetchDataIncome(res.data._id);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          localStorage.removeItem("token");
          setIsLogOut(true);
        }
      });
  };
  // balance
  const fetchDataBalance = (id) => {
    const _id = dataFinance && dataFinance._id;

    axios
      .get(id ? url + "finance/balance/" + id : url + "finance/balance/" + _id)
      .then((res) => {
        dispatch({
          type: "BALANCE",
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // get expense
  const fetchDataFetchExpense = (id) => {
    const _id = dataFinance && dataFinance._id;
    axios
      .get(
        id
          ? url + "finance/get/expense/" + id
          : url + "finance/get/expense/" + _id
      )
      .then((res) => {
        setDataExpense(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // get data doughnut
  const fetchDataChartDoughnut = (id) => {
    const _id = dataFinance && dataFinance._id;
    axios
      .get(
        id
          ? url + "finance/get/doughnut/" + id
          : url + "finance/get/doughnut/" + _id
      )
      .then((res) => {
        setDatatDataDoughnut(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // get dataChatLine
  const fetchDataChartLine = (id) => {
    const _id = dataFinance && dataFinance._id;
    axios
      .get(
        id
          ? url + "finance/get/chartline/" + id
          : url + "finance/get/chartline/" + _id
      )
      .then((res) => {
        setDataChartLine(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // get dataChat Bar
  const fetchDataChartBar = (id) => {
    const _id = dataFinance && dataFinance._id;
    axios
      .get(
        id
          ? url + "finance/get/charbar/" + id
          : url + "finance/get/charbar/" + _id
      )
      .then((res) => {
        setDataChartBar(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // get dataChat Bar
  const fetchDataIncome = (id) => {
    const _id = dataFinance && dataFinance._id;
    axios
      .get(id ? url + "finance/income/" + id : url + "finance/income/" + _id)
      .then((res) => {
        setDataIncome(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLoseChooseCurrency = () => {
    setIsLoseCurrency(false);
    setBlurHome(false);
  };
  const handleLoseChooseCurrencyByData = (data) => {
    if (data.defaultCurrency === undefined) {
      setIsLoseCurrency(true);
      setBlurHome(true);
    }
  };
  useEffect(() => {
    checkLogined();
  }, []);
  return (
    <Router>
      <div>
        {isLoseCurrency ? (
          <ChooseCurrency handleLoseChooseCurrency={handleLoseChooseCurrency} />
        ) : null}
        {isLogOut ? <Redirect to="/user/login" /> : null}
        <Switch>
          <Route exact path={`/`}>
            <Home
              dataExpense={dataExpense}
              datatDataDoughnut={datatDataDoughnut}
              dataChatLine={dataChatLine}
              dataChartBar={dataChartBar}
              fetchDataBalance={fetchDataBalance}
              fetchDataFetchExpense={fetchDataFetchExpense}
              fetchDataChartDoughnut={fetchDataChartDoughnut}
              fetchDataChartLine={fetchDataChartLine}
              checkLogined={checkLogined}
              blurHome={blurHome}
              fetchDataChartBar={fetchDataChartBar}
            />
          </Route>

          <Route exact path={`/user/signup`} component={SignUp} />
          <Route exact path={`/user/login`} component={Login} />
          <Route exact path={`/user/profile`}>
            <Profile dataIcome={dataIcome} checkLogined={checkLogined} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
