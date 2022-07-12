import * as ActionType from "../constants/constants";
const initialState = {
  user: {},
  listUser: [],
};

// Use the initialState as a default value
export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ActionType.GET_LIST_USER:
      state.listUser = payload;
      break;
    case ActionType.UPDATE_USER:
      break;
    default:
      break;
  }
  return { ...state };
}
