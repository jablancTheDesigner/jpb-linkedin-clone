import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { news } from "./Data";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function Widgets() {
  const newsPost = ({ title, source, category, author }) => {
    return (
      <div className="news-post">
        <span className="news-post__decoration">
          <ArrowRightIcon />
        </span>
        <div className="news-post__content">
          <h3>{title}</h3>
          <p>
            {source} &bull; {category} &bull; {author}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="card">
        <div className="card__title card--padding">
          <h3>Bam's News</h3>
          <InfoIcon />
        </div>
        <div>
          {news.map((post, idx) => {
            return <div key={idx}>{newsPost(post)}</div>;
          })}
          <div>
            <a href="/" className="widgets__action">
              Show More
              <KeyboardArrowDownIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
