import { Avatar } from "@mui/material";
import React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const recents = (topic) => {
    return (
      <div className="recent-topic">
        <p># {topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__card">
        <div className="user">
          <div
            className="user__banner"
            style={{ backgroundImage: `url(${user.payload.photoUrl})` }}
          ></div>
          <Avatar className="user__avatar" src={user.payload.photoUrl} />
          <div className="user__name">{user.payload.displayName}</div>
          <div className="user__title">Software Engineer 3</div>
        </div>
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <div className="stats">
              <div className="sidebar__title">
                <p>Who view your profile</p>
                <p className="number">14</p>
              </div>
              <div className="sidebar__title">
                <p>
                  Connections <br />
                  <b>Grow your network</b>
                </p>
                <p className="number">274</p>
              </div>
            </div>
          </li>
          <li className="sidebar__list-item">
            <div className="my-items">
              <div className="sidebar__title">
                <a href="/" className="sidebar__action">
                  <BookmarkIcon />
                  My Items
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="sidebar__card sidebar--list-borderless">
        <ul className="sidebar__list recent">
          <li className="sidebar__list-item sidebar--borderless">
            <h2 className="sidebar__title sidebar--bold">Recent</h2>
          </li>
          <li className="sidebar__list-item sidebar--borderless">
            {recents("React")}
          </li>
          <li className="sidebar__list-item sidebar--borderless">
            {recents("JS")}
          </li>
          <li className="sidebar__list-item sidebar--borderless">
            {recents("CSS")}
          </li>
          <li className="sidebar__list-item sidebar--borderless">
            {recents("HTML")}
          </li>
          <li className="sidebar__list-item sidebar--borderless">
            {recents("Software Engineering")}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
