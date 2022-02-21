import React, { useState } from "react";
import {reduxForm} from "redux-form";
import { createField,requiredField, renderField} from "../../../Common/ValidateForm/ValidateForm";
import Post from "./Post/Post";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import s from "./profilePosts.module.css";
let FormPosts = (props) => {
  const { handleSubmit } = props;
  return (
    <form style={{width:'40%',display:'flex'}} onSubmit={handleSubmit}>
      {createField("post","post",'text',renderField,[requiredField])}
      <Button type='submit'>Add</Button>
    </form>
  );
};

let FormReduxPosts = reduxForm({
   form: "Post", 
  })(FormPosts);

let ProfilePosts = (props) =>{
  let [edit,setEdit]=useState(false);

  let arrPosts = [...props.PostsData].reverse().map((el) => {
    return <Post id={el.id} key={el.id} text={el.text} like={el.like} />;
  });
  const onSubmit = (data) => {
    props.addPostOnPage(data.post)
    setEdit(false)
  };
  const addPost =()=>{
    setEdit(true)
  }
  return (
    <div>
      {edit?<FormReduxPosts  onSubmit={onSubmit} />:
      <div  style={{margin:'0 15rem'}}>
         <Fab onClick={addPost}
          color="secondary"
        >
          <AddIcon />
        </Fab>
       </div>
      }
     
       
        
      {arrPosts}
     

     
    </div>
  );
}



export default ProfilePosts;
