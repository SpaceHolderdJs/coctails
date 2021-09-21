import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Card from "./Card";

const CocktailDetails = () => {
  const { id } = useParams();

  const [info, setInfo] = useState();

  const getInfo = () => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}&key=1`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setInfo(data.drinks[0]);
      });
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="column centered container">
      <h1>Details </h1>
      {info && <Card drink={info} isFull={true} />}
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default CocktailDetails;
