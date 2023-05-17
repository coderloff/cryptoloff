import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  console.log(window.innerWidth);
  return (
    <>
      <Sidebar />
      <Header />
      <Main coinId="bitcoin" />
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
