import { Avatar } from "@mui/material";
import React from "react";

function HeaderOption({ Icon, title, avatar, action }) {
  return (
    <div className={`headerOption`} onClick={() => action()}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <span className="headerOption__title">{title}</span>
    </div>
  );
}

export default HeaderOption;
