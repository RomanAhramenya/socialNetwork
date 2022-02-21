import React, { useState } from "react";
import UpDate from "./FormUpDate";
import UpDateStatic from "./UpDateStatic";
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import s from './../profileInfo.module.css'
function ProfileUpDate(props) {
  let [editMode, setEditMode] = useState(false);
let onClick=()=>{
  setEditMode(true)
}
let upDateClock=()=>{
  setEditMode(false)
}

  return (
    <>
      {props.id === (props.local.userId?Number(props.local.userId):props.id) && !editMode ?
       <Fab size='small' className={s.setting}   onClick={onClick} color="secondary" aria-label="edit">
       <EditIcon style={{fontSize:'1rem'}}  />
     </Fab>:''
      }
      {editMode ? <UpDate initialValues={props.profile} upDateClock={upDateClock} {...props} /> : <UpDateStatic {...props} />}
    </>
  );
}
export default ProfileUpDate;
