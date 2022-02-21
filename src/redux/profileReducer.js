import { usersAPI } from "../Components/API/api";

const addPostCreator = "ADD_POST";
const POST_VALUE_ON_INPUT = "POST_VALUE_ON_INPUT";
const SET_PROFILE_DATA = "sET_PROFILE_DATA";
const updateStatus = "UPDATE_STATUS";
const updatePhoto="profile/updatePhoto"
const upDateProfile='profile/upDateProfile'
let initialstate = {
  PostsData: [
    { id: 1, text: "Heloo", like: 3 },
    { id: 2, text: "ok", like: 4 },
    { id: 3, text: "Heloo", like: 3 },
  ],
  profileData: null,
  status: "",
};
let profileReducer = (state = initialstate, action) => {
  switch (action.type) {
    case addPostCreator:
      return {
        ...state,
        PostsData: [...state.PostsData, { id: 1, text: action.data, like: 1 }],
      };
    case POST_VALUE_ON_INPUT:
      return {
        ...state,
        PostValue: action.value,
      };
    case SET_PROFILE_DATA:
      return {
        ...state,
        profileData: action.profileData,
      };
    case updateStatus:
      return {
        ...state,
        status: action.status,
      };
      case updatePhoto:
        return{
          ...state,
          profileData:{...state.profileData,photos:{...state.profileData.photos,large:action.file}}
          
        }
        case upDateProfile:
          return{
            ...state,
            profileData:{...state.profileData,contacts:{...state.profileData.contacts,contacts:action.contacts}}
          }
        
    default:
      return state;
  }
};
export default profileReducer;
export const addPostActionCreator = (data) => ({ type: addPostCreator, data });
const updatePhotoAC=(file)=>({type:updatePhoto,file})
export const postValueOnInputActionCreator = (text) => {
  return { type: POST_VALUE_ON_INPUT, value: text };
};
const updateStatusAC = (status) => ({ type: updateStatus, status });
export const getStatusThunk =
  (id = 19463) =>
  async (dispatch) => {
    let res = await usersAPI.getStatus(id);
    dispatch(updateStatusAC(res.data));
  };

export const updateStatusthunk = (status) => async (dispatch) => {
  let res = await usersAPI.updateStatus(status);

  if (res.data.resultCode === 0) {
    dispatch(updateStatusAC(status));
  }
};
export const updatePhotots= (file) => async (dispatch) => {
  let res = await usersAPI.updatePhoto(file);
  if (res.data.resultCode === 0) {
    dispatch(updatePhotoAC(res.data.data.photos.large));
  }
};
const upDateProfileAC=(contacts)=>({type:upDateProfile,contacts});
export const upDateProfileThunk=(contacts)=>async(dispatch,getState)=>{
  const userId=getState().auth.id
  let res = await usersAPI.upDateProfile(contacts)

  if (res.data.resultCode === 0) {
    dispatch(profileThunk(userId));
  }
}
export const profileThunk = (userId) => async (dispatch) => {
  let res = await usersAPI.getProfile(userId);
  dispatch(setProfileData(res));
};

export const setProfileData = (profileData) => ({
  type: SET_PROFILE_DATA,
  profileData,
});
