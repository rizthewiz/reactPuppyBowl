import React, { useState, useEffect } from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
import axios from "axios";

function PuppyForm() {
  const [selectedPuppy, setSelectedPuppy] = useState({});
  const api = `https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-b/players`;

  useEffect(() => {
    async function addPup() {
      try {
      } catch (err) {
        console.error("Issue add player!", err);
      }
    }
    addPup();
  }, []);

  return (
    <>
      <h1>Puppy Bowl Form</h1>
      <form>
        <label htmlFor="name">
          Puppy Name
          <input type="text" />
        </label>
        <label htmlFor="breed">
          Puppy Breed
          <input type="text" />
        </label>
        <label htmlFor="picture">
          Puppy Picture
          <input type="text" />
        </label>
        <label htmlFor="field">
          Field
          <input type="checkbox" />
        </label>
        <label htmlFor="bench">
          Bench
          <input type="checkbox" />
        </label>
        <button type="submit">Submit!</button>
      </form>
    </>
  );
}

export default PuppyForm;
