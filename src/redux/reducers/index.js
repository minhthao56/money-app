import { combineReducers } from "redux";

import Category from "./Category";
import CheckLogin from "./CheckLogin";
import Balance from "./Balance";
import DarkMode from "./DarkMode";
import Blur from "./Blur";

const myReducer = combineReducers({
  Category: Category,
  CheckLogin: CheckLogin,
  Balance: Balance,
  DarkMode: DarkMode,
  Blur: Blur,
});

export default myReducer;
