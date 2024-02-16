import React from "react";
import Home from "./Home";
import { Link } from "react-router-dom";

function SingleView({ name, img, id }) {
  return (
    <>
      <div className="puppy">
        <h2>{name}</h2>
        <img src={img}></img>
        <Link to={`/${id}`}>See Details</Link>
      </div>
    </>
  );
}

export default SingleView;
