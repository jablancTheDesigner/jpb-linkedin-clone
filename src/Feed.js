import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import PhotoIcon from "@mui/icons-material/Photo";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EventIcon from "@mui/icons-material/Event";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import Post from "./Post";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const searchOptions = (Icon, name, color) => {
    return (
      <div className="feed__options">
        <Icon style={{ color: color }} />
        <p>{name}</p>
      </div>
    );
  };

  const createPost = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "posts"), {
      message: newPost,
      author: user.payload,
      timestamp: serverTimestamp(),
      photo: "",
      video: "",
      events: {
        image: "",
        type: "",
        name: "",
        timezone: "",
        startDate: "",
        endtDate: "",
        description: "",
      },
      article: "",
    });
    setNewPost("");
  };

  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        );
      }
    );
  }, []);

  return (
    <div className="feed">
      <div className="card feed__search">
        <div className="feed__input">
          <Avatar src={user.payload.photoUrl} />
          <form onSubmit={(e) => createPost(e)}>
            <input
              type="text"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="Create new post"
            />
          </form>
        </div>
        <div className="feed__search-options">
          {searchOptions(PhotoIcon, "Photos", "blue")}
          {searchOptions(OndemandVideoIcon, "Videos", "red")}
          {searchOptions(EventIcon, "Events", "coral")}
          {searchOptions(NewspaperIcon, "Article", "purple")}
        </div>
      </div>
      <div className="feed__content">
        <FlipMove>
          {posts.map(
            ({
              id,
              data: { message, name, description, timestamp, author },
            }) => {
              return (
                <Post
                  key={id}
                  id={id}
                  message={message}
                  name={name}
                  description={description}
                  timestamp={timestamp}
                  author={author}
                />
              );
            }
          )}
        </FlipMove>
      </div>
    </div>
  );
}

export default Feed;
