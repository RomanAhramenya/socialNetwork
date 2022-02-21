import { usersAPI } from "../Components/API/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_ISLOADED = "SET_ISLOADED";
const SET_DISABLED_FOLLOW = "SET_DISABLED_FOLLOW";
let initiallState = {
  Users: [],
  totalCount: 10,
  pageSize: 5,
  currentPage: 1,
  isLoaded: true,
  disabledFollowed: [],
};
const followUnfollowAC=(item,bool,action)=>{
  return item.map((e) => {
    if (e.id === action.id) {
      return { ...e, followed: bool };
    }
    return e;
  })

}
let UsersReducer = (state = initiallState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        Users: followUnfollowAC(state.Users,true,action)
      };
    case UNFOLLOW:
      return {
        ...state,
        Users: followUnfollowAC(state.Users,false,action)
      };
    case SET_USERS:
      return {
        ...state,
        Users: [...action.users],
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_ISLOADED:
      return {
        ...state,
        isLoaded: action.isLoaded,
      };
    case SET_DISABLED_FOLLOW:
      return {
        ...state,
        disabledFollowed: action.bool
          ? [...state.disabledFollowed, action.id]
          : [state.disabledFollowed.filter((id) => id !== action.id)],
      };
    default:
      return state;
  }
};
export const follow = (id) => ({ type: FOLLOW, id });
export const unFollow = (id) => ({ type: UNFOLLOW, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotatalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setIsLoaded = (isLoaded) => ({ type: SET_ISLOADED, isLoaded });
export const setDisabledFollow = (bool, id) => ({
  type: SET_DISABLED_FOLLOW,
  bool,
  id,
});
export default UsersReducer;
export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setIsLoaded(true));
  let res = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setUsers(res.items));
  dispatch(setIsLoaded(false));
  dispatch(setTotatalCount(res.totalCount));
};
   
const followUnffolow=async (dispatch,metod,id,followed)=>{
  dispatch(setDisabledFollow(true, id));
  let res = await metod(id);
  if (res.resultCode === 0) {
    dispatch(followed(id));
  }
  dispatch(setDisabledFollow(false, id));
}

export const unFollowThunk = (id) => async (dispatch) => {
  followUnffolow(dispatch,usersAPI.deleteFollow,id,unFollow)
};
export const followThunk = (id) => async (dispatch) => {
  followUnffolow(dispatch,usersAPI.postFollow,id,follow)
};
