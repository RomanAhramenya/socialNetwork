import React from "react";
import s from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePostsW from "./ProfilePosts/ProfilePostsContainer";
 function Profile(props) {

  return (
    <div className={s.wrapper}>
      <ProfileInfo {...props} />
      <ProfilePostsW
        // posts={props.profile.PostsData}
        // postValue={props.profile.PostValue}
        // dispatch={props.dispatch}
      />
    </div>
  );
}
export default Profile