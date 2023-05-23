import React from "react";
import { UserStats } from "../../models/UserStats";
import CadanceContext from "../context/CadanceType";
import UsersList from "../users/UsersList";
import classes from "./UsersPage.module.css";

const UsersPage: React.FC = () => {
  const { type, value } = React.useContext(CadanceContext);

  const [state, setState] = React.useState<UserStats>();

  React.useEffect(() => {
    const url = `http://localhost:8080/api/v1/users/${
      type === "month" ? value : "year"
    }`;

    const fetchData = async () => {
      const resp = await fetch(url);
      const data = await resp.json();
      setState(data);
    };

    fetchData();
  }, [type, value]);
  if (!state) {
    return <div style={{ textAlign: "center" }}> Loading...</div>;
  } else {
    return (
      <div className={classes.usersPage}>
        <UsersList
          data={state.mostMentionedUsers}
          title="Most tagged users"
        ></UsersList>
        <UsersList
          data={state.mostLikedUsers}
          title="Most liked users"
        ></UsersList>
        <UsersList
          data={state.mostRetweetedUsers}
          title="Most retweeted users"
        ></UsersList>
        <UsersList
          data={state.mostEngagedUsers}
          title="Most engaging users"
        ></UsersList>
      </div>
    );
  }

  return <></>;
};

export default UsersPage;
