import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { currentPageSelector, disabledFollowedSelector, findeUsersSelector, isLoadedSelector, pageSizeSelector, totalCountSelector } from "../../../redux/Selector/usersSelector";
import {
   followThunk,getUsersThunk,setCurrentPage, unFollowThunk, setIsLoaded, setTotatalCount, setUsers,
} from "../../../redux/UsersReducer";
import Preloader from "../../Common/Preloader/Preloader";
import FindUsers from "./FindUsers";

class UsersClass extends Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)
     
  }
  onClickCurrentPage = (page) => {
    this.props.setCurrentPage(page);
    this.props.getUsersThunk(page,this.props.pageSize)
  };
  render() {
    return (
      <>
        {this.props.isLoaded ? <Preloader /> : null}
        <FindUsers
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onClickCurrentPage={this.onClickCurrentPage}
          user={this.props.user}
          disabledFollowed={this.props.disabledFollowed}
          unFollowThunk={this.props.unFollowThunk}
          followThunk={this.props.followThunk}
        />
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    user: findeUsersSelector(state),
    totalCount: totalCountSelector(state),
    pageSize: pageSizeSelector(state),
    currentPage: currentPageSelector(state),
    isLoaded: isLoadedSelector(state),
    disabledFollowed:disabledFollowedSelector(state)
  };
};
export default compose(connect(mapStateToProps, {setUsers,
  setTotatalCount,setCurrentPage,setIsLoaded,followThunk,unFollowThunk,getUsersThunk}))(UsersClass)