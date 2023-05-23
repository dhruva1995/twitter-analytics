import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tweet } from "../../models/Tweet";
import Card from "../UI/Card";
import classes from "./Tweet.module.css";

const TweetComponent: React.FC<{ data: Tweet }> = (props: { data: Tweet }) => {
  return (
    <Card className={classes.tweet}>
      <div className={classes["tweet-header"]}>
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        <p>{props.data.userName}</p>
        <span>{props.data.date}</span>
      </div>
      <div className={classes["tweet-body"]}>{props.data.content}</div>
    </Card>
  );
};

export default TweetComponent;
