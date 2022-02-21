
import {connect} from "react-redux";
import ProfilePosts from "./ProfilePosts";
import {
  addPostActionCreator,
  postValueOnInputActionCreator,
} from "../../../../redux/profileReducer";
import {postSelector} from './../../../../redux/Selector/profileSelector'
// import StoreContext from "../../../../redux/Context";

// function ProfilePosts_W(props) {

//   return (
//     <StoreContext.Consumer>
//       {store=>{

//         let state=store.getState()
//          let addPostOnPage = () => {
//     store.dispatch(addPostActionCreator());
//   };
//   let changeTextarea = (text) => {
//     store.dispatch(postValueOnInputActionCreator(text));
//   };

//         return (
//              <ProfilePosts
//       postValue={state.profile.PostValue}
//       posts={state.profile.PostsData}
//       addPostOnPage={addPostOnPage}
//       changeTextarea={changeTextarea}/>
//         )
//       }}

//     </StoreContext.Consumer>

//   );
// }

// export default ProfilePostsContainer;
let mapStateToProps = (state) => {
  return {
    PostsData: postSelector(state),
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPostOnPage: (data) => {
      dispatch(addPostActionCreator(data));
    },
    changeTextarea: (text) => {
      dispatch(postValueOnInputActionCreator(text));
    },
  };
};
const ProfilePosts_W = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);
export default ProfilePosts_W;
