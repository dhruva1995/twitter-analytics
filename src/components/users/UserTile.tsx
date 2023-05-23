import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserPair } from "../../models/UserStats";
import Card from "../UI/Card";
import classes from "./UserTile.module.css";
const UserTile: React.FC<{ data: UserPair }> = ({ data }) => {
  return (
    <Card className={classes["user-tile"]}>
      <div className={classes["user-tile-header"]}>
        <div className={classes["user-image-name"]}>
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <p>{data.userName}</p>
        </div>
        <span>{data.value}</span>
      </div>
      <div>+12345689 abcde@ghil.com</div>
    </Card>
  );
};

export default UserTile;
