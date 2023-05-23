import React from "react";
import { TrendingPageData } from "../../models/Tweet";
import Card from "../UI/Card";
import CategoryBarChart from "../UI/charts/CategoryBarChart";
import CadanceContext from "../context/CadanceType";
import TweetPool from "../trending/TweetPool";
import classes from "./TrendingPage.module.css";
const TrendingPage: React.FC = () => {
  const { type, value } = React.useContext(CadanceContext);

  const [state, setState] = React.useState<TrendingPageData>();

  React.useEffect(() => {
    const url = `http://localhost:8080/api/v1/trending/${
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
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  const list = state.trendingHashTags.map((data) => (
    <li key={data.hashTag}>
      <p>#{data.hashTag}</p>
    </li>
  ));
  const colmnName = state.trendingHashTags.map((data) => data.hashTag);
  const data = state.trendingHashTags.map((data) => data.engagement);

  return (
    <>
      <section className={classes.above}>
        <div className={classes["tag-container"]}>
          <h2>Trending topics</h2>
          <ul className={classes.hashtags}>{list}</ul>
        </div>
        <Card className={classes["hashtag-graph"]}>
          <CategoryBarChart
            columnNames={colmnName}
            data={data}
            graphTitle="HashTag trendingness"
            xLabel="# tags"
            yLabel="Engagement"
          ></CategoryBarChart>
        </Card>
      </section>

      <section>
        <TweetPool
          data={state.mostEngaged || []}
          title="Trending tweets by user engagement"
        ></TweetPool>

        <TweetPool
          data={state.mostLiked || []}
          title="Most Liked tweets"
        ></TweetPool>

        <TweetPool
          data={state.mostRetweeted || []}
          title="Most retweeted tweets"
        ></TweetPool>
      </section>
    </>
  );
};

export default TrendingPage;
