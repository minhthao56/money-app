import * as types from "../constans/typeAction";

const initialState = [];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BALANCE:
      const balance = action.action;
      return balance;
    default:
      return state;
  }
};
export default myReducer;
