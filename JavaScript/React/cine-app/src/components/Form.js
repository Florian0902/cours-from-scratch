import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Form = () => {
  const form = useRef();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("code");
  const [sortGoodBad, setSortGoodBad] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
      )
      .then((res) => setData(res.data.results));
  }, [search]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form ref={form}>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="searchInput"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <input
            type="submit"
            value="Rechercher"
            className="submit"
            onClick={(e) => e.preventDefault()}
          />
        </form>
        <div className="btn-sort-container">
          <button className="btn-sort" id="goodToBad" onClick={()=>setSortGoodBad('goodToBad')}>
            <span>Top</span>
          </button>
          <button className="btn-sort" id="badToGood" onClick={()=>setSortGoodBad('badToGood')}>
            <span>Flop</span>
          </button>
        </div>
      </div>
      <div className="result">
        {data
          .slice(0, 12)
          .sort((a, b) => {
            if (sortGoodBad === "goodToBad") {
              return b.vote_average - a.vote_average;
            } else if (sortGoodBad === "badToGood") {
              return a.vote_average - b.vote_average;
            }
          })
          .map((movie, index) => (
            <Card key={index} movies={movie} />
          ))}
      </div>
    </div>
  );
};

export default Form;
