import { usersAPI } from "../Components/API/api";
import { stopSubmit } from "redux-form";
const SET_AUTH = "auth/SET_AUTH";
let initiallState = {
  login: null,
  id: null,
  email: null,
  isLogin: false,
};
let authReducer = (state = initiallState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        login: action.login,
        id: action.id,
        email: action.email,
        isLogin: action.bool,
      };

    default:
      return state;
  }
};
export let getAuthThunk = () => async (dispatch) => {
  let res = await usersAPI.getAuth();
  if (res.resultCode === 0) {
    dispatch(setAuthAC(res.data.login, res.data.id, res.data.email, true));
  }
};
export let authLoginThunk =
  (email, password, rememberMe) => async (dispatch) => {
    let res = await usersAPI.authLogin(email, password, rememberMe);
    if (res.data.resultCode === 0) {
      return dispatch(getAuthThunk());
    } else {
      dispatch(stopSubmit("login", { _error: res.data.messages[0] }));
    }
  };
export let outLoginThunk = () => async (dispatch) => {
  let res = await usersAPI.outLogin();
  if (res.data.resultCode === 0) {
    return dispatch(setAuthAC(null, null, null, false));
  }
};

export default authReducer;
export const setAuthAC = (login, id, email, bool) => ({
  type: SET_AUTH,
  login,
  id,
  email,
  bool,
});
