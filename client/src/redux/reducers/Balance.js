import * as types from "../constans/typeAction";

const initialState = 0;

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BALANCE:
      const balance = action.data;
      return balance;
    default:
      return state;
  }
};
export default myReducer;
