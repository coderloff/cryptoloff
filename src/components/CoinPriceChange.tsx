import "./css/PriceContent.css";

interface Props {
  symbol: string;
  id: string;
  data: any;
}

const CoinPriceChange = ({ symbol, data, id }: Props) => {
  return (
    <>
      <div className="card" key={id}>
        <h5 className="title">{symbol.toUpperCase() + " Price Change"}</h5>
        <div className="bar"></div>
        <div className="content-wrapper">
          <div className="card-content">
            <div className="change-container">
              <h6>All</h6>
              <h6
                style={
                  data.ath_change_percentage?.usd > 0
                    ? { color: "#6fff7d" }
                    : { color: "#ff415a" }
                }
              >
                {data.ath_change_percentage?.usd.toFixed(2)}%
              </h6>
            </div>
            <div className="change-container">
              <h6>365 days</h6>
              <h6
                style={
                  data.price_change_percentage_1y_in_currency.usd > 0
                    ? { color: "#6fff7d" }
                    : { color: "#ff415a" }
                }
              >
                {data.price_change_percentage_1y_in_currency.usd?.toFixed(2)}%
              </h6>
            </div>
            <div className="change-container">
              <h6>30 days</h6>
              <h6
                style={
                  data.price_change_percentage_30d_in_currency.usd > 0
                    ? { color: "#6fff7d" }
                    : { color: "#ff415a" }
                }
              >
                {data?.price_change_percentage_30d_in_currency.usd?.toFixed(2)}%
              </h6>
            </div>
            <div className="change-container">
              <h6>7 days</h6>
              <h6
                style={
                  data.price_change_percentage_7d_in_currency.usd > 0
                    ? { color: "#6fff7d" }
                    : { color: "#ff415a" }
                }
              >
                {data.price_change_percentage_7d_in_currency.usd?.toFixed(2)}%
              </h6>
            </div>
            <div className="change-container">
              <h6>24 H</h6>
              <h6
                style={
                  data.price_change_percentage_24h_in_currency.usd > 0
                    ? { color: "#6fff7d" }
                    : { color: "#ff415a" }
                }
              >
                {data.price_change_percentage_24h_in_currency.usd?.toFixed(2)}%
              </h6>
            </div>
            <div className="change-container">
              <h6>1 H</h6>
              <h6
                style={
                  data.price_change_percentage_1h_in_currency.usd > 0
                    ? { color: "#6fff7d" }
                    : { color: "#ff415a" }
                }
              >
                {data.price_change_percentage_1h_in_currency.usd?.toFixed(2)}%
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinPriceChange;
