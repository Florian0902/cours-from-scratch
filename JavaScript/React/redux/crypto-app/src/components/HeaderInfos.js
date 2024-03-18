import axios from "axios";
import React, { useEffect, useState } from "react";
import PercentChange from "./PercentChange";
import TableFilters from "./TableFilters";

const HeaderInfos = ({ data }) => {
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
      axios
        .get("https://api.coingecko.com/api/v3/global")
        .then((res) => setHeaderData(res.data.data))
        .catch((err) => console.error(err));
    
  }, []);

  return (
    <div className="header-container">
      <ul className="title">
        <li>
          <h1>
            <img src="./assets/logo.png" alt="logo" /> Watch Tower
          </h1>
        </li>
        <li>
          crypto-monaies :{" "}
          {headerData.active_cryptocurrencies &&
            headerData.active_cryptocurrencies.toLocaleString()}
        </li>
        <li>Marchés : {headerData.markets && headerData.markets}</li>
      </ul>
      <ul className="info-mkt">
        <li className="global-mkt">
          Global Market Cap :{" "}
          <PercentChange
            percent={headerData.market_cap_change_percentage_24h_usd}
          />
        </li>
        <li>
          BTC Dominance :{" "}
          {headerData.market_cap_percentage &&
            headerData.market_cap_percentage.btc.toFixed(1) + "%"}
        </li>
        <li>
          BTC Dominance :{" "}
          {headerData.market_cap_percentage && headerData.market_cap_percentage.eth.toFixed(1) + "%"}
        </li>
      </ul>
      <TableFilters />
    </div>
  );
};

export default HeaderInfos;
