import React, { useEffect, useState } from "react";

function StatusHooks(props) {
  let [editMode, setEditMod] = useState(false);
    const activeStatus =()=>{
   setEditMod(true)
    }
    
    const deActiveStatus =()=>{
        setEditMod(false);
        props.updateStatusthunk(status)
    }
    let [status, setStatus] = useState(props.status);
    const onChangeactiveStatus = (e)=>{
        setStatus(e.currentTarget.value)
    }
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])
  return (
    <>
      {editMode ? (
        <input onChange={onChangeactiveStatus} value={status} onBlur={deActiveStatus} autoFocus></input>
      ) : (
        <span onClick={activeStatus}>{props.status || "---------"}</span>
      )}
    </>
  );
}

export default StatusHooks;
