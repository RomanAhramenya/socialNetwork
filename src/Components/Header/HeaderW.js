import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {outLoginThunk} from './../../redux/authReducer'
import { isloginSelector, loginSelector } from "../../redux/Selector/headerSelector";
class HeaderW extends Component {
  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state)=>({
    login:loginSelector(state),
    isLogin:isloginSelector(state)
})
 
export default connect(mapStateToProps,{outLoginThunk})(HeaderW);