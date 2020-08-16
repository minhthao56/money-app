import * as types from "../constans/typeAction";

const initialState = false;

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DARK_MODE:
      const dark = action.action;
      return dark;
    default:
      return state;
  }
};
export default myReducer;
