import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { authRedirect } from "../../../HOC/authRedirect";
import { compose } from "redux";
import {profileThunk,getStatusThunk,updateStatusthunk,updatePhotots,upDateProfileThunk} from './../../../redux/profileReducer'
import { idSelector, profileSelector } from "../../../redux/Selector/profileSelector";
import { isLoginSelector } from "../../../redux/Selector/usersSelector";
class ProfileW extends Component {
  refreshProfile=()=>{
    let userId=this.props.local.userId
    if(!userId){
      userId= this.props.id
    }
    this.props.profileThunk(userId);
    this.props.getStatusThunk(userId)
  }
  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prev){
  if(this.props.local.userId!==prev.local.userId){
    this.refreshProfile()
  }
  }

  render() {
    return <Profile upDateProfileThunk={this.props.upDateProfileThunk} isUserId={this.props.id === Number(this.props.local.userId) }updatePhotots={this.props.updatePhotots}  {...this.props} profile={this.props.profile.profileData} updateStatusthunk={this.props.updateStatusthunk} status={this.props.profile.status}/>;
  }
}

let UrlProfile = (props) => {
  let location = useParams();
  return <ProfileW {...props} local={location} />;
};
let mapStateToProps = (state) => ({
  profile: profileSelector(state),
  isLogin: isLoginSelector(state) ,
  id:idSelector(state)
});

export default compose(
  connect(mapStateToProps, { profileThunk ,upDateProfileThunk ,getStatusThunk,updateStatusthunk,updatePhotots}),
  authRedirect
)(UrlProfile);
