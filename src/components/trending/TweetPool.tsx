import React from "react";
import { Tweet } from "../../models/Tweet";
import TweetComponent from "./TweetComponent";
import classes from "./TweetPool.module.css";

const TweetPool: React.FC<{ data: Tweet[]; title: string }> = (props: {
  data: Tweet[];
  title: string;
}) => {
  let content = (
    <div className={classes["text-center"]}>No Tweets to display...</div>
  );

  if (props.data.length > 0) {
    content = (
      <div className={classes["tweet-pool"]}>
        {props.data.map((tweet) => (
          <TweetComponent data={tweet} key={tweet.id} />
        ))}
      </div>
    );
  }
  return (
    <div>
      <h3 className={classes["text-center"]}>{props.title}</h3>
      {content}
    </div>
  );
};

export default TweetPool;
