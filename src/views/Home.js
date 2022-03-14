import React from "react";
import Sidebar from "../Sidebar";
import Feed from "../Feed";
import Widgets from "../Widgets";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Login from "../Login";

function Home() {
  const user = useSelector(selectUser);
  return (
    <>
      {!user && <Login />}
      {user && (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </>
  );
}

export default Home;
