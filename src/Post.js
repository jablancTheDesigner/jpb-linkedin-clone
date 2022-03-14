import React, { forwardRef } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import { Avatar } from "@mui/material";

const Post = forwardRef(
  ({ id, name, description, photoUrl, message, timestamp, author }, ref) => {
    const postOptions = (Icon, action) => {
      return (
        <div className="post__action">
          <Icon />
          <p>{action}</p>
        </div>
      );
    };

    return (
      <div className="post" ref={ref}>
        <div className="post__head">
          <div className="post__author">
            {author && (
              <Avatar src={author.photoUrl} className="post__avatar" />
            )}
            {author.displayName}
          </div>
        </div>
        <div className="post__content">
          <p>{message}</p>
          <p>{description}</p>
        </div>
        <div className="post__footer">
          {postOptions(ThumbUpIcon, "Like")}
          {postOptions(CommentIcon, "Comment")}
          {postOptions(ShareIcon, "Share")}
          {postOptions(SendIcon, "Send")}
        </div>
      </div>
    );
  }
);

export default Post;
