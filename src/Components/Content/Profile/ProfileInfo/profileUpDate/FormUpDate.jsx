import React from "react";
import {  reduxForm } from "redux-form";
import Button from '@mui/material/Button';
import {createField, renderField, requiredField,radioButton} from './../../../../Common/ValidateForm/ValidateForm'
let FormUpDate=({handleSubmit,profile})=> {
  return (
    <form onSubmit={handleSubmit} style={{display:'flex'}} >
      <div>
      {createField("fullName", "NAME",'text', renderField,[requiredField],)}
      {createField("lookingForAJobDescription", "lookingForAJobDescription",'text', renderField,[requiredField])}
      {createField("aboutMe", "aboutMe",'text', renderField,[requiredField],)}
      {createField("lookingForAJob","lookingForAJob",'checkbox',radioButton)}
      <Button style={{margin:'0 1vw'}} type='submit' variant="contained" color="success"> Refresh</Button>
      </div>
      <div style={{}} >
         {Object.keys(profile.contacts).map((key) => {
        return createField("contacts."+ key, key,'text', renderField)
        
      })}
         </div>
     
    </form>
  );
}
let FormUpDateRedux = reduxForm({ form: "contacts" })(FormUpDate);
function UpDate(props) {
  const onSubmit = (data) => {
  console.log(data)
    props.upDateProfileThunk(data
    );
    props.upDateClock()
  };
  return (
    <>
      <FormUpDateRedux {...props} onSubmit={onSubmit} />
    </>
  );
}
export default UpDate;
