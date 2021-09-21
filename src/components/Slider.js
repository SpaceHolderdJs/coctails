import React, { useState } from "react";

const Slider = ({ children, numberToShow }) => {
  const [number, setNumber] = useState(0);
  const [fade, setFade] = useState(true);

  console.log(children);

  return (
    <div className="column centered slider">
      <h1>Slider</h1>
      <div className="row sl-wrapper centered">
        <button
          onClick={() => {
            setNumber(number - 1 < 0 ? children.length - 1 : number - 1);
            setFade(!fade);
          }}>
          {"<"}
        </button>
        <div className={`slide row ${!fade ? "fade" : "append"}`}>
          {children.slice(number, numberToShow + number)}
        </div>
        <button
          onClick={() => {
            setNumber(number + 1 > children.length - 1 ? 0 : number + 1);
            setFade(!fade);
          }}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
