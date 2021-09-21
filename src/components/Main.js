import React, { useState, useEffect, useContext } from "react";

import Slider from "./Slider";

import Card from "./Card";

import { Context } from "../App";

const Main = () => {
  const { getData } = useContext(Context);

  const [cocktailsArr, setCocktailsArr] = useState([]);

  const quantityOfSlider = 5;

  useEffect(() => {
    getData({ name: "f", value: "m" }, setCocktailsArr);
  }, []);

  return (
    <div className="column centered main container">
      <h1>Cocktail of the day</h1>
      {cocktailsArr.length > 0 && (
        <Slider numberToShow={quantityOfSlider}>
          {cocktailsArr.length > 0 &&
            cocktailsArr.map((item) => <Card drink={item} />)}
        </Slider>
      )}
    </div>
  );
};

export default Main;
