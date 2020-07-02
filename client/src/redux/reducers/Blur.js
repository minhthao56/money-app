import * as types from "../constans/typeAction";

const initialState = false;

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BLUR_ON:
      const blurOn = action.action;
      return blurOn;
    case types.BLUR_OFF:
      const blurOff = action.action;
      return blurOff;
    default:
      return state;
  }
};
export default myReducer;
