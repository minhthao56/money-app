import * as types from "../constans/typeAction";

const initialState = [];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHOOSE_CATEGORY:
      const arrCategory = action.choose.split(",");
      return arrCategory;
    case types.DELETE_CATEGORY:
      return [];
    default:
      return state;
  }
};
export default myReducer;
