import React from "react";
import Preloader from "../../../Common/Preloader/Preloader";
import s from "./profileInfo.module.css";
import ProfileUpDate from "./profileUpDate/ProfileUpDate";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }
  let onChange = (e) => {
    console.log(e);
    props.updatePhotots(e.target.files[0]);
  };
  return (
    <div className={s.wrapper}>
        
            <div className={s.profile_img}>
        <div className={s.wraperImg}>
        <div className={s.wraperLoadImg}></div>
          <img
            alt="#"
            src={
              props.profile.photos.large ||
              "https://avatars.mds.yandex.net/i?id=593624eff5d625c27e0bd733f8208689-4348084-images-thumbs&n=13&exp=1"
            }
          />
          {props.isUserId && (
            <div className={s.button}>
              <label htmlFor="loadLogoImg" onChange={onChange}>
                <PhotoCamera className={s.loadPhotoIcon} />
              </label>
              <input style={{display:'none'}} id="loadLogoImg" type="file" onChange={onChange} />
            </div>
          )}
        </div>
      </div>
        
      
      <ProfileUpDate {...props} />
    </div>
  );
}

export default ProfileInfo;
