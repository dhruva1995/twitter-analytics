import React from "react";
import HomePageData from "../../models/HomePageData";
import CadanceContext from "../context/CadanceType";
import HomeCharts from "../home/HomeCharts";
import HomeWidgets from "../home/HomeWidgets";
import classes from "./HomePage.module.css";
const HomePage: React.FC = () => {
  const { type, value } = React.useContext(CadanceContext);

  const [state, setState] = React.useState<HomePageData>();

  React.useEffect(() => {
    const url = `http://localhost:8080/api/v1/home/${
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
      <div className={classes.container}>
        <HomeWidgets data={state}></HomeWidgets>
        <HomeCharts data={state}></HomeCharts>
      </div>
    );
  }
};

export default HomePage;
