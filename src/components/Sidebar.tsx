import "./css/Sidebar.css";

const Sidebar = () => {
  const setButtonState = (id: string) => {
    const btn = document.getElementById(id);
    const buttons = document
      .querySelector(".buttons")
      ?.querySelectorAll(".btn");
    buttons?.forEach((button) => {
      button?.classList.contains("active") &&
        (button?.classList.remove("active"),
        button?.querySelector("i")?.classList.remove("fa-solid")),
        button?.querySelector("i")?.classList.add("fa-regular")
    });
    !btn?.classList.contains("active") &&
      (btn?.classList.add("active"),
      btn?.querySelector("i")?.classList.remove("fa-regular"),
      btn?.querySelector("i")?.classList.add("fa-solid"));
  };
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/Logo.png/" alt="Logo" />
        <h4>Cryptoloff</h4>
      </div>
      <div className="buttons">
        <a
          className="btn active"
          id="home"
          onClick={() => setButtonState("home")}
        >
          <i className="fa-solid fa-house-blank"></i>
          <h6>Market</h6>
        </a>
        <a
          className="btn"
          id="buy-crypto"
          onClick={() => {
            setButtonState("buy-crypto");
          }}
        >
          <i className="fa-regular fa-cart-minus"></i>
          <h6>Buy Crypto</h6>
        </a>
        <a
          className="btn"
          id="swap"
          onClick={() => {
            setButtonState("swap");
          }}
        >
          <i className="fa-regular fa-arrows-retweet"></i>
          <h6>Swap</h6>
        </a>
        <a
          className="btn"
          id="exchange"
          onClick={() => {
            setButtonState("exchange");
          }}
        >
          <i className="fa-regular fa-chart-bullet"></i>
          <h6>Exchange</h6>
        </a>
        <a
          className="btn"
          id="earn"
          onClick={() => {
            setButtonState("earn");
          }}
        >
          <i className="fa-regular fa-circle-dollar"></i>
          <h6>Earn</h6>
        </a>
        <a
          className="btn"
          id="settings"
          onClick={() => {
            setButtonState("settings");
          }}
        >
          <i className="fa-regular fa-gear"></i>
          <h6>Settings</h6>
        </a>
        <a
          className="btn"
          id="help"
          onClick={() => {
            setButtonState("help");
          }}
        >
          <i className="fa-regular fa-circle-question"></i>
          <h6>Help</h6>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
