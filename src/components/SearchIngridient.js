import React, { useState, useContext } from "react";

import Card from "./Card";
import { Context } from "../App";

const SearchIngridient = () => {
  const { getData } = useContext(Context);

  const [request, setRequest] = useState("");
  const [ingridientsArray, setIngridientsArray] = useState([]);

  return (
    <div className="container">
      <h1>Ingridients</h1>
      <div className="row centered">
        <input
          type="text"
          value={request}
          onChange={(e) => {
            setRequest(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setRequest("");
            getData({ name: "i", value: request }, setIngridientsArray);
          }}>
          Search
        </button>
      </div>

      <div className="wrapper row centered">
        {ingridientsArray?.length > 0 &&
          ingridientsArray.map((item) => <Card ingredient={item} />)}
      </div>
    </div>
  );
};

export default SearchIngridient;
