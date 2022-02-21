import React from "react";
import { Field, reduxForm } from "redux-form";
import Button from '@mui/material/Button';
let FormDialogs = (props) => {
    const { handleSubmit } = props;
    return (
      <form style={{position:'relative'}} onSubmit={handleSubmit}>
        <Field name={"massege"} component={'textarea'} cols='100' rows="5" placeholder={"messege"} />
        <Button style={{position:'absolute',bottom:'1rem',right:'1rem'}} type={"submit"} variant="outlined">send</Button>
      </form>
    );
  };
  export default reduxForm({ form: "Dialogs" })(FormDialogs);