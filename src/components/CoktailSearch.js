import React, { useState, useContext } from "react";

import Card from "./Card";

import { Context } from "../App";

const CocktailSearch = () => {
  const { getData } = useContext(Context);

  const [request, setRequest] = useState("");
  const [cocktailsArray, setCocktailsArray] = useState([]);

  return (
    <div className="column centered container">
      <h1>Cocktail</h1>
      <div className="row centered">
        <input
          type="text"
          onChange={(e) => setRequest(e.target.value)}
          value={request}
        />
        <button
          onClick={() => {
            setRequest("");
            getData({ name: "s", value: request }, setCocktailsArray);
          }}>
          Search
        </button>
      </div>
      <div className="wrapper row">
        {cocktailsArray?.length > 0 &&
          cocktailsArray.map((item) => <Card drink={item} />)}
      </div>
    </div>
  );
};

export default CocktailSearch;
