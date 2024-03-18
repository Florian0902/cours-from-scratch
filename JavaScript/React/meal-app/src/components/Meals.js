import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Meals = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then((res) => setData(res.data.meals));
  }, [search]);

  return (
    <div className="meals">
      <div className="input-container">
        <h1>React Cooking App</h1>
        <input
          type="text"
          placeholder="Tapez le nom d'un plat (en anglais)"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="meals-container">
        {data && data.slice(0, 24).map((meal) => (
          <Card key={meal.idMeal} meals={meal} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
