import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home/Home";
// import BuyCrypto from "./components/Buy Crypto/BuyCrypto";
import "./App.css";

const App = () => {
  console.log(window.innerWidth);
  // <BuyCrypto />
  return (
    <>
      <Sidebar />
      <Header />
      <Home coinId="bitcoin" />
      <div className="use-pc">
        <div className="content">
          <i className="fa-light fa-desktop icon"></i>
          <h2>
            Please use PC for the <span style={{ color: "#6fff7d" }}>best</span>{" "}
            experience
          </h2>
        </div>
      </div>
    </>
  );
};

export default App;
