import "./css/PriceContent.css";
import moment from "moment";
import { Line } from "react-chartjs-2";
import useAxios from "../hooks/useAxios";
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
import { useState } from "react";
import Skeleton from "./Skeleton";

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

interface Props {
  name: string;
  id: string;
}

const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "rgba(76,76,76, 0.2)",
      },
    },
  },
  plugins: {
    legend: {
      display: false
    }
  },
  responsive: true,
};

const PriceChart = ({ name, id }: Props) => {
  const [interval, setInterval] = useState("max");
  const [format, setFormat] = useState("YYYY");
  const cryptoData = useAxios(
    "coins/" + id + "/market_chart?vs_currency=usd&days=" + interval
  );
  const coinPriceData = cryptoData[1]?.prices.map((value: any) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));
  const chartData = {
    labels: coinPriceData?.map((value: any) => moment(value.x).format(format)),
    datasets: [
      {
        fill: true,
        data: coinPriceData?.map((value: any) => value.y),
        label: name,
        pointRadius: 0,
        pointHoverRadius: 2,
        borderColor: "rgb(162, 174, 254)",
        backgroundColor: "rgba(162, 174, 254, 0.1)",
      },
    ],
  };
  if(cryptoData[0]){
    return (
      <div className="card">
        <Skeleton className="h-5 w-32"/>
        <Skeleton className="h-5 w-full mt-4"/>
        <Skeleton className="h-5 w-full mt-4"/>
        <Skeleton className="h-5 w-full mt-4"/>
        <Skeleton className="h-5 w-full mt-4"/>
      </div>
    )
  }
  function changeInterval(interval: string, format: string, id:string) {
    setInterval(interval);
    setFormat(format);
    const intervalButtons = document.querySelectorAll(".interval-btn");
    intervalButtons.forEach(button => {
      button.classList.contains("active") && button.classList.remove("active");
    });
    const selectedButton = document.getElementById(id);
    !selectedButton?.classList.contains("active") && selectedButton?.classList.add("active");
  }
  return (
    <div className="card">
      <h5 className="title">Price</h5>
      <div className="content-wrapper">
        <div className="card-content">
          {cryptoData ? (
            <Line data={chartData} options={options} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="interval">
        <h6 className="interval-btn active" id="all" onClick={() => changeInterval("max", "YYYY", "all")}>All</h6>
        <h6 className="interval-btn" id="1y" onClick={() => changeInterval("365", "MMM YYYY", "1y")}>1 Y</h6>
        <h6 className="interval-btn" id="6m" onClick={() => changeInterval("182", "DD MMM", "6m")}>6 M</h6>
        <h6 className="interval-btn" id="3m" onClick={() => changeInterval("91", "DD MMM", "3m")}>3 M</h6>
        <h6 className="interval-btn" id="1m" onClick={() => changeInterval("30", "DD MMM", "1m")}>1 M</h6>
        <h6 className="interval-btn" id="24h" onClick={() => changeInterval("1", "ddd HH:mm", "24h")}>24h</h6>
      </div>
    </div>
  );
};

export default PriceChart;
