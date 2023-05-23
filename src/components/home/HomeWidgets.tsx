import HomePageData from "../../models/HomePageData";
import Widget from "../UI/Widget/Widget";
import classes from "./HomeWidgets.module.css";

const HomeWidgets: React.FC<{ data: HomePageData }> = (props: {
  data: HomePageData;
}) => {
  return (
    <ul className={classes["home-widgets"]}>
      <li>
        <Widget
          title="Total no of tweets"
          value={props.data.tweetCount.toString()}
        ></Widget>
      </li>
      <li>
        <Widget
          title="Total users"
          value={props.data.uniqueUser.toString()}
        ></Widget>
      </li>
      <li>
        <Widget
          title="Total likes"
          value={props.data.likeCount.toString()}
        ></Widget>
      </li>
      <li>
        <Widget
          title="Total retweets"
          value={props.data.retweetCount.toString()}
        ></Widget>
      </li>
      <li>
        <Widget
          title="Total user data in (Bytes)"
          value={props.data.storageCount.toString()}
        ></Widget>
      </li>
    </ul>
  );
};

export default HomeWidgets;
