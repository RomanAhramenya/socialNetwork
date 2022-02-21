import React from "react";
import { Route, Routes } from "react-router-dom";
import UrlProfile from "./Components/Content/Profile/ProfileW";
import HeaderContainer from "./Components/Header/HeaderW";
import Nav from "./Components/Nav/Nav";
import "./App.css";
import Music from "./Components/Content/Music/Music";
import News from "./Components/Content/News/News";
import Setting from "./Components/Content/SettingNav/Setting";
import DialogsW from "./Components/Content/Dialogs/Dialogs";
import UsersClass from "./Components/Content/FindUsers/FindUsersW";
import Login from "./Components/Content/Login/Login";
import { connect } from "react-redux";
import {getAuthThunk} from './redux/authReducer' 
class App extends React.Component {
componentDidMount(){
  this.props.getAuthThunk()
}
  render(){
     return (
    <div className="app-wraper">
      <HeaderContainer/>
      <Nav/>
      <div className="mainContent">
        <Routes>
          <Route index element={<UrlProfile/>}/>
          <Route path="/profile" element={<UrlProfile/>}/>
          <Route path="/profile/:userId" element={<UrlProfile/>}/>
          <Route path="/messeges" element={<DialogsW/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UsersClass />} />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
  }
 
}

export default connect(null,{getAuthThunk})(App) ;
