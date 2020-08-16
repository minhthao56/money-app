import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// pick a date util library
import MomentUtils from "@date-io/moment";
import "antd/dist/antd.css";

//Redux
import myReducer from "./redux/reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";

let store = createStore(
  myReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
