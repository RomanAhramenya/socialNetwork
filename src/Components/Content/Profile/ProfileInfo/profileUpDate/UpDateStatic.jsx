import React from 'react';
import StatusHooks from '../StatusHooks'
import s from './../profileInfo.module.css'

function UpDateStatic(props) {
  return  <div className={s.info}>
   <div>
       <div className={s.info_point}>
    <span> Name</span>: <span className={s.info_point_value}>{props.profile.fullName}</span>
  </div>
  <div className={s.info_point}>
    <span>status</span>:
    <span className={s.info_point_value}>
      {props.isLogin && (
        <StatusHooks
          updateStatusthunk={props.updateStatusthunk}
          status={props.status}
          id={props.local.userId}
        />
      )}
    </span>
  </div>
 
    <div className={s.info_point}>
      <span className={s.info_point}>lookingForAJob: </span>{props.profile.lookingForAJob?<span className={s.info_point_value}>'yes'</span>:<span className={s.info_point_value}>'no'</span>}
    </div>
    <div className={s.info_point}><span >my skills: </span><span className={s.info_point_value}>{props.profile.lookingForAJobDescription}</span></div>
    <div className={s.info_point}><span >aboutMe: </span><span  className={s.info_point_value}>{props.profile.aboutMe}</span></div>
  
   </div>
  <div>
   <span className={s.info_point}>CONTACTS:</span>  {Object.keys(props.profile.contacts).map(key=>{
      return <Contacts tittle={key} string={props.profile.contacts[key]}/>
    })}
  </div>
</div>
;
}
let Contacts=({tittle,string})=>{
return <div>
<span  className={s.info_point}>{tittle}</span>:<span  className={s.info_point_value}>{string}</span>
</div>;
}

export default UpDateStatic;
