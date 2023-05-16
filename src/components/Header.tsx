import "./css/Header.css";

const Header = () => {
  return (
    <header>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <i className="fa-regular fa-magnifying-glass"></i>
      </div>
      <div className="right">
        <div className="mode">
          <i className="fa-solid fa-sun-bright"></i>
        </div>
        <button className="connect-wallet">
          <h6>Connect Wallet</h6>
          <i className="fa-solid fa-wallet"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
