import React, { useEffect, useState } from "react";
import HeaderInfos from "./components/HeaderInfos";
import { data } from "./db";
import GlobalChart from "./components/GlobalChart";
import axios from "axios";
import Table from "./components/Table";
import ToTop from "./components/ToTop";

const App = () => {
  const [coinsData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y"
      )
      .then((res) => setCoinData(res.data));

    window.addEventListener("scroll", () => {
      if (window.scrollY > 145) {
        document.querySelector(".table-header").classList.add("active");
      } else {
        document.querySelector(".table-header").classList.remove("active");
      }
    });
  }, []);
  return (
    <div className="app-container">
      <header>
        <HeaderInfos data={data} />
        <GlobalChart coinsData={coinsData} />
      </header>
      <Table coinsData={coinsData} />
      <ToTop />
    </div>
  );
};

export default App;
