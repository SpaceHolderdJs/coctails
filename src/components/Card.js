import React, { useState } from "react";

import { Link } from "react-router-dom";

const Card = ({ drink, ingredient, isFull }) => {
  const [showIngridients, setShowIngridients] = useState(false);

  if (drink) {
    const {
      idDrink,
      strCategory,
      strDrink,
      strImageSource,
      strInstructions,
      strDrinkThumb,
    } = drink;

    const ingredients = Object.keys(drink)
      .filter((key) => key.includes("strIngredient") && drink[key])
      .map((item) => drink[item]);

    console.log(drink);

    return (
      <div className={`column  card drink-card ${isFull && "full-card"}`}>
        <img src={strDrinkThumb} alt="drink" />
        <div className="column info-wrapper">
          <h3>{strDrink}</h3>

          {isFull && (
            <>
              <button onClick={() => setShowIngridients(!showIngridients)}>
                {!showIngridients ? "Show ingridients" : "Hide ingridients"}
              </button>
              {showIngridients &&
                ingredients.map((item) => <span>{item}</span>)}
              <h3>Instructions</h3>
              <p>{strInstructions}</p>
            </>
          )}

          <span>{strCategory}</span>
          {!isFull && <Link to={`/cocktailDetails/${idDrink}`}>More</Link>}
        </div>
      </div>
    );
  } else {
    const { strDescription, strType } = ingredient;

    return (
      <div className="row card ing-card">
        <div className="column">
          <h1>{strType}</h1>
          <p>{strDescription}</p>
        </div>
        <img
          src={`https://www.thecocktaildb.com/images/ingredients/${strType.toLowerCase()}.png`}
          alt="drink"
        />
      </div>
    );
  }
};

export default Card;
