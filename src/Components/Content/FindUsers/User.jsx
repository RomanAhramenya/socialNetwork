import React from "react";
import s from "./FindUsers.module.css";
import UserCard from "./UserCard";
function User({ e, disabledFollowed, unFollowThunk, followThunk }) {
  return (
    <div style={{margin:'1rem'}}>
      <div key={e.key} className={s.wraper}>
        <UserCard e={e} disabledFollowed={disabledFollowed} unFollowThunk={unFollowThunk} followThunk={followThunk}/>
        <div className={s.right}>
          <div>
            <div>{e.name}</div>
            <div className={s.status}>{e.status}</div>
          </div>
          <div>
            <div>{e.country}</div>
            <div>{e.city}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
