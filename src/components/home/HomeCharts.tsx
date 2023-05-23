import HomePageData from "../../models/HomePageData";
import Card from "../UI/Card";
import BarChart, { BarChartProps } from "../UI/charts/BarChart";
import classes from "./HomeCharts.module.css";

const graphMetadata: BarChartProps[] = [];

const convert = (
  input: Record<string, number>
): { columnNames: Date[]; data: number[] } => {
  const columnNames = [];
  const data = [];

  for (let key in input) {
    if (input.hasOwnProperty(key)) {
      columnNames.push(new Date(+key));
      data.push(input[key]);
    }
  }

  return { columnNames, data };
};

const HomeCharts: React.FC<{ data: HomePageData }> = (props: {
  data: HomePageData;
}) => {
  return (
    <section className={classes.homeCarts}>
      <header>
        <h2>System wide metrics</h2>
      </header>
      <ul className={classes.homeCartsList}>
        <li>
          <Card className={classes.homeBarChart}>
            <BarChart
              {...convert(props.data.tweetsPerDay)}
              graphTitle="No of Tweets per day"
              unit="day"
              xLabel="day"
              yLabel="# of tweets"
            ></BarChart>
          </Card>

          <Card className={classes.homeBarChart}>
            <BarChart
              {...convert(props.data.activeUsersPerDay)}
              graphTitle="No of active users per day"
              unit="day"
              xLabel="day"
              yLabel="# of users"
            ></BarChart>
          </Card>

          <Card className={classes.homeBarChart}>
            <BarChart
              {...convert(props.data.storageUsagePerDay)}
              graphTitle="Storage consumed"
              unit="day"
              xLabel="day"
              yLabel="Bytes of data"
            ></BarChart>
          </Card>
        </li>
      </ul>
    </section>
  );
};

export default HomeCharts;
