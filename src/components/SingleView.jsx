import React from "react";
import Home from "./Home";

function SingleView({ name, img, breed, status }) {
  return (
    <>
      <div className="puppy">
        <p>{name}</p>
        <img src={img}></img>
        <p>{breed}</p>
        <p>{status}</p>
      </div>
    </>
  );
}

export default SingleView;
