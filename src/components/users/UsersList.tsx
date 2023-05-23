import { UserPair } from "../../models/UserStats";
import Card from "../UI/Card";
import UserTile from "./UserTile";
import classes from "./UsersList.module.css";
const UsersList: React.FC<{ data: UserPair[]; title: string }> = ({
  data,
  title,
}) => {
  let content = [<div style={{ textAlign: "center" }}>No users found....</div>];
  if (data.length > 0) {
    content = data.map((up) => (
      <UserTile data={up} key={up.userName}></UserTile>
    ));
  }
  return (
    <Card className={classes.usersList}>
      <h2>{title}</h2>
      <hr />
      {content}
    </Card>
  );
};

export default UsersList;
