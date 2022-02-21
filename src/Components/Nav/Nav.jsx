import React from "react";
import s from "./nav.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DraftsIcon from "@mui/icons-material/Drafts";

import GroupIcon from "@mui/icons-material/Group";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
function Nav({id}) {
  return (
    <nav className={s.nav}>
      <List>
        <ListItem disablePadding>
          <NavLink className={s.NavLink} to={id?`/profile/${id}`:'/profile'}>
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink className={s.NavLink} to={`/messeges`}>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink className={s.NavLink} to={`/users`}>
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink className={s.NavLink} to={`/news`}>
            <ListItemButton>
              <ListItemIcon>
                <NewspaperIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="News" />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink className={s.NavLink} to={`/music`}>
            <ListItemButton>
              <ListItemIcon>
                <LibraryMusicIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Music" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding>
          <NavLink className={s.NavLink} to={`/settings`}>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </nav>
  );
}
let mapStateToProps = (state) => ({
  id: state.auth.id
});
export default connect(mapStateToProps)(Nav);
