import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import Button from '@mui/material/Button';
import { authLoginThunk } from "../../../redux/authReducer";
import { createField, renderField, requiredField,radioButton } from "../../Common/ValidateForm/ValidateForm";

let LoginForm = ({handleSubmit,error}) => {
  return (
    <form style={{width:'20%'}} onSubmit={handleSubmit}>
      {createField("email","Email",'text',renderField,[requiredField])}
      {createField("password","Password",'text',renderField,[requiredField])}
       {createField("rememberMe","remember me",'checkbox',radioButton)}
      <Button style={{margin:'0 1vw'}} type='submit' variant="contained">Login</Button>
      {error && <div>{error}</div>}
    </form>
  );
};
let LoginReduxForm = reduxForm({form: "login"})(LoginForm);

function Login(props) {
  const login = data => props.authLoginThunk(data.email, data.password, data.rememberMe);
  return (
    <div>
      <LoginReduxForm {...props} onSubmit={login} />
    </div>  
  )}

let mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
});

export default connect(mapStateToProps, { authLoginThunk })(Login);
