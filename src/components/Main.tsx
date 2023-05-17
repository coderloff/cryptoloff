import "./css/Main.css";
import useAxios from "../hooks/useAxios";
import Card from "./Card";
import CoinPriceChange from "./CoinPriceChange";
import PriceChart from "./PriceChart";
import Market from "./Market";

interface Props {
  coinId: string;
}

const Main = ({ coinId }: Props) => {
  const coinsData = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
  );
  const cryptoData = useAxios("coins/" + coinId);
  const marketData = useAxios("global");
  const marketCapChartData = useAxios(
    "coins/" + coinId + "/market_chart?vs_currency=usd&days=max"
  );
  const market = marketData[1]?.data;
  function convertNumberToString(n: number) {
    if (n / 1000000000 > 0) {
      return (n / 1000000000).toFixed(2).toString() + "B";
    } else if (n / 1000000 > 0) {
      return (n / 1000000).toFixed(2).toString() + "M";
    } else if (n / 1000 > 0) {
      return (n / 1000).toFixed(2).toString() + "K";
    } else {
      return n.toString();
    }
  }
  console.log(market);
  return (
    <main>
      <div className="content-container">
        <div className="value-content content">
          <Card
            title="Coins"
            chartData={marketCapChartData[1]?.market_caps}
            loading={marketCapChartData[0]}
            value="9.43M"
            altText="24H Value (USD)"
          ></Card>
          <Card
            title="24H Price Change"
            chartData={marketCapChartData[1]?.market_caps}
            loading={marketCapChartData[0]}
            value={market?.markets}
            percentage={market?.market_cap_change_percentage_24h_usd}
          ></Card>
          <Card
            title="Total Market Cap (USD)"
            chartData={marketCapChartData[1]?.market_caps}
            loading={marketCapChartData[0]}
            value={convertNumberToString(
              Math.floor(market?.total_market_cap.usd)
            )}
            percentage={market?.market_cap_change_percentage_24h_usd}
          ></Card>
          <Card
            title="24H Value (USD)"
            chartData={marketCapChartData[1]?.market_caps}
            loading={marketCapChartData[0]}
            value="28.57M"
            altText="Listed Cryptos"
          ></Card>
        </div>
        <div className="price-content content">
          <PriceChart
            name={coinId.charAt(0).toUpperCase() + coinId.slice(1)}
            id={coinId}
          />
          <CoinPriceChange
            symbol={cryptoData[1]?.symbol}
            id={cryptoData[1]?.id}
            data={cryptoData}
          />
        </div>
        <div className="market-content content">
          <Market data={coinsData} />
        </div>
      </div>
    </main>
  );
};

export default Main;
