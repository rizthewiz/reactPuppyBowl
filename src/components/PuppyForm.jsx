import React, { useState, useEffect } from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
import axios from "axios";

function PuppyForm() {
  const [newPuppy, setNewPuppy] = useState({
    breed: "",
    name: "",
    imageUrl: "",
  });
  const [puppyStatus, setPuppyStatus] = useState("");
  // do functionality for puppy status handle change
  // when Submit is pressed prevent default and only submit if puppyStatus and newPuppy true
  // If false give error on window for user
  // If true give success message, render pup to page, and clear form

  const api = `https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-b/players`;

  function handleUserChange(e) {
    const { name, value } = e.target;
    setNewPuppy((preValue) => {
      return { ...preValue, [name]: value };
    });
    console.log(newPuppy);
  }

  useEffect(() => {
    async function addPup() {
      try {
      } catch (err) {
        console.error("Issue adding player!", err);
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
          <input
            type="text"
            name="name"
            value={newPuppy.name}
            onChange={(e) => handleUserChange(e)}
          />
        </label>
        <label htmlFor="breed">
          Puppy Breed
          <input
            type="text"
            name="breed"
            value={newPuppy.breed}
            onChange={(e) => handleUserChange(e)}
          />
        </label>
        <label htmlFor="picture">
          Puppy Picture
          <input
            type="text"
            name="imageUrl"
            value={newPuppy.imageUrl}
            onChange={(e) => handleUserChange(e)}
          />
        </label>
        <label htmlFor="field">
          Field
          <input type="checkbox" name="field" value="field" />
        </label>
        <label htmlFor="bench">
          Bench
          <input type="checkbox" name="bench" value="bench" />
        </label>
        <button type="submit">Submit!</button>
      </form>
    </>
  );
}

export default PuppyForm;
