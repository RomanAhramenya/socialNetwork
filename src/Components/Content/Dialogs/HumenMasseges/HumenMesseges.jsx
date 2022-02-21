import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
function HumenMesseges(props) {
  return (
    <div style={{marginBottom:'1rem',display:'flex'}}>
      <NavLink style={{textDecoration:'none',color:'black'}} to={`/messeges/${props.id}`}>
        <div style={{display:'flex',alignItems:'center'}}>
          <Avatar sx={{bgcolor: deepOrange[500] }}>
            {props.name[0]}
          </Avatar>
           <div style={{margin:'0 1rem'}}>
             {props.name}
          </div>
        </div>
      </NavLink>
    </div>
  );
}
export default HumenMesseges;
