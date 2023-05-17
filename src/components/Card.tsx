import "./css/ValueContent.css";
import Skeleton from "./Skeleton";
import moment from "moment";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false
    }
  },
  responsive: true,
};

interface Props {
  title: string;
  value: string;
  chartData?: any;
  loading:boolean;
  percentage?: number;
  altText?: string;
}

const Card = ({ title, value, chartData, loading, percentage, altText }: Props) => {
  if(loading){
    return (
      <div className="card">
        <Skeleton className="h-4 w-32"/>
        <Skeleton className="h-4 w-full mt-2"/>
        <Skeleton className="h-4 w-full mt-2"/>
        <Skeleton className="h-4 w-full mt-2"/>
      </div>
    )
  }
  const coinPriceData = chartData?.map((value: any) => ({
    x: value[0],
    y: value[1]?.toFixed(2),
  }));
  const cardChartData = {
    labels: coinPriceData?.map((value: any) =>
      moment(value.x).format("D MMMM YYYY")
    ),
    datasets: [
      {
        fill: true,
        data: coinPriceData?.map((value: any) => value.y),
        label: "Market",
        pointRadius: 0,
        borderColor: "rgb(162, 174, 254)",
        backgroundColor: "rgba(162, 174, 254, 0.1)",
      },
    ],
  };
  return (
    <div className="card">
      <h5 className="title">{title}</h5>
      <div className="bar"></div>
      <div className="card-content">
        <div className="values">
          <h5>{value}</h5>
          <h6
            style={
              percentage
                ? percentage > 0
                  ? { color: "#6fff7d" }
                  : { color: "red" }
                : undefined
            }
          >
            <>
              {percentage && (percentage > 0 ? "+" : "-")}
              {percentage && percentage?.toFixed(2) + "%"} {altText}
            </>
          </h6>
        </div>
        <div className="chart">
          <Line data={cardChartData} options={options}></Line>
        </div>
      </div>
    </div>
  );
};

export default Card;
