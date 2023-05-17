import "../css/MarketContent.css";
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
import useAxios from "../../hooks/useAxios";
import Skeleton from "../Skeleton";

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
      display: false,
    },
  },
  responsive: true,
};

interface Props {
  data: any;
}

function addChart(id: string) {
  const chartData = useAxios("coins/" + id + "/market_chart?vs_currency=usd&days=max")[1]?.prices;
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
  return <Line data={cardChartData} options={options}/>
}

const Market = ({ data }: Props) => {
  if(data[0]){
    return (
      <div className="card">
        <Skeleton className="h-5 w-32"/>
        <Skeleton className="h-5 w-full mt-3"/>
        <Skeleton className="h-5 w-full mt-3"/>
        <Skeleton className="h-5 w-full mt-3"/>
      </div>
    )
  }
  return (
    <div className="card">
      <div className="header">
        <h5 className="title">Market</h5>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <i className="fa-regular fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="bar"></div>
      <div className="table-header">
        <h6>Market</h6> <h6>Price</h6> <h6>24H Change</h6>
        <h6>24H Lowest</h6> <h6>24H Highest</h6> <h6>Total Volume</h6>
        <h6>Total Supply</h6> <h6></h6>
      </div>
      <div className="bar"></div>
      <div className="content-wrapper">
        <div className="card-content">
          {data[1] &&
            data[1].map((coin: any, index: number) => (
              <>
                {index != 0 && <div className="bar"></div>}
                <div className="coin" key={coin.id}>
                  <div className="market value">
                    <img src={coin.image} alt={coin.name} />
                    <h6>
                      {coin.name + " (" + coin.symbol.toUpperCase() + ")"}
                    </h6>
                  </div>
                  <div className="price value">
                    <h6>{coin.current_price}</h6>
                  </div>
                  <div className="price-change-24h value">
                    <h6>{coin.price_change_24h}</h6>
                  </div>
                  <div className="low-24h value">
                    <h6>{coin.low_24h}</h6>
                  </div>
                  <div className="high-24h value">
                    <h6>{coin.high_24h}</h6>
                  </div>
                  <div className="total-volume value">
                    <h6>{coin.total_volume}</h6>
                  </div>
                  <div className="total-supply value">
                    <h6>{coin.total_supply}</h6>
                  </div>
                  <div className="chart">
                    <h6>{addChart(coin.id)}</h6>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Market;
