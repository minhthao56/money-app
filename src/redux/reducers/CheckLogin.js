import * as types from "../constans/typeAction";

const initialState = {};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECK_LOGGED:
      const dataUser = action.action;
      return Object.assign({}, state, dataUser);
    default:
      return state;
  }
};
export default myReducer;
