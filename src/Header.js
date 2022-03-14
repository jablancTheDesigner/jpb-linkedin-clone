import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import logo from "./Jablanc-logo.svg";
import { logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { Link } from "react-router-dom";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const loggout = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__left">
          <img src={logo} alt="logo" />
          {user && (
            <div className="header__search">
              <SearchIcon />
              <input type="text" placeholder="Search" />
            </div>
          )}
        </div>
        <div className="header__right">
          {user && (
            <>
              <HeaderOption title="Home" Icon={HomeIcon} />
              <HeaderOption title="My Network" Icon={GroupIcon} />
            </>
          )}
          <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
          {user && (
            <>
              <HeaderOption title="Messaging" Icon={TextsmsIcon} />
              <HeaderOption title="Notifications" Icon={NotificationsIcon} />
              <HeaderOption
                title="Me"
                avatar={user.payload.photoUrl}
                action={loggout}
              />
              <div className="border-left">
                <HeaderOption title="Work" Icon={AppsIcon} />
              </div>
            </>
          )}

          {!user && (
            <div className="border-left header__offline-nav">
              <Link to="/register">Join</Link>
              <Link to="/">Login</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
