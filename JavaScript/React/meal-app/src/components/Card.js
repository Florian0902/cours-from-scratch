

const Card = ({ meals }) => {
  
  return (
    <div className="meal-card">
      <h2>{meals.strMeal}</h2>
      <p>Origine : {meals.strArea}</p>
      <img src={meals.strMealThumb} alt= {meals.strMeal} />
      <p>{meals.strInstructions}</p>
    </div>
  );
};

export default Card;
