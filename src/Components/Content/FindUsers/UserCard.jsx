import React from 'react'
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import s from "./FindUsers.module.css";
const urlFoto ="https://avatars.mds.yandex.net/i?id=593624eff5d625c27e0bd733f8208689-4348084-images-thumbs&n=13&exp=1";

function UserCard({e, disabledFollowed, unFollowThunk, followThunk}) {
  let photo=e.photos.small
  function FollowUnfollow(followed,text){
    return(
      <div>
          <Button variant="outlined"
            disabled={disabledFollowed.some((id) => id === e.id)}
            onClick={() =>followed(e.id)}>
            {text}
          </Button>
      </div>
    )}
  return (
    <div className={s.left}>
    <NavLink to={"/profile/" + e.id}>
      <img alt="#"
           src={photo != null ? photo : urlFoto}/>
    </NavLink>
    {e.followed ? FollowUnfollow(unFollowThunk,'unFollow') : FollowUnfollow(followThunk,'Follow')}
  </div>
  )
}

export default UserCard