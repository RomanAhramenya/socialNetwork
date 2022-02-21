import React, { Component } from "react";
import { usersAPI } from "../../../API/api";

class Status extends Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  componentDidMount() {
    usersAPI.getStatus(this.props.id).then((res) => {
      this.setState({
        status: res.data,
      });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }
  activeStatus = () => {
    this.setState({
      editMode: true,
    });
  };
  deActiveStatus = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatusthunk(this.state.status);
  };
  onChangeactiveStatus = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  render() {
    console.log(this.props.id);
    return (
      <div>
        {this.state.editMode ? (
          <input
            onChange={this.onChangeactiveStatus}
            autoFocus
            onBlur={() => this.deActiveStatus()}
            value={this.state.status}
          ></input>
        ) : (
          <span onClick={() => this.activeStatus()}>
            {this.state.status || "---------"}
          </span>
        )}
      </div>
    );
  }
}

export default Status;
