import "./css/MarketContent.css";

interface Props {
  data: any;
}

const Market = ({ data }: Props) => {
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
          {data &&
            data.map((coin: any, index: number) => (
              <>
                {index != 0 && <div className="bar"></div>}
                <div className="coin">
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
                  <div className="graph">
                    <h6> </h6>
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
