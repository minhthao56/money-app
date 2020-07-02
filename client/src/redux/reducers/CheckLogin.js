import * as types from "../constans/typeAction";

const initialState = {
  isAuth: false,
  data: null,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECK_LOGGED:
      const data = action.data;
      return Object.assign({}, state, {
        isAuth: true,
        data: data,
      });
    default:
      return state;
  }
};
export default myReducer;
