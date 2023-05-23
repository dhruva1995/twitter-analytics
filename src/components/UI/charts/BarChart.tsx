import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  TimeScale,
  Title,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-date-fns";

import { Bar } from "react-chartjs-2";

export interface BarChartProps {
  data: number[];
  columnNames: Date[];
  xLabel: string;
  yLabel: string;
  graphTitle: string;
  unit: "month" | "day" | "second";
}

const BarChart: React.FC<BarChartProps> = (props: BarChartProps) => {
  ChartJS.register(
    CategoryScale,
    TimeScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: props.columnNames,
    datasets: [
      {
        data: props.data,
        backgroundColor: "#1da1f2",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: props.graphTitle,
        font: { size: 20 },
      },

      legend: { display: false },
    },
    scales: {
      y: {
        title: { text: props.yLabel, display: true, align: "end" as const },
        grid: {
          display: false,
        },
      },
      x: {
        type: "time" as const,
        title: { text: props.xLabel, display: true, align: "end" as const },
        grid: {
          display: false,
        },
        time: {
          unit: props.unit,
        },
      },
    },
  };

  return <Bar data={data} options={options}></Bar>;
};

export default BarChart;
