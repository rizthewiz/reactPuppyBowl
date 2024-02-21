import React, { useState, useEffect } from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
import axios from "axios";

function PuppyForm() {
  const [newPuppy, setNewPuppy] = useState({
    breed: "",
    name: "",
    imageUrl: "type url here",
    status: "bench",
  });
  const [addedPup, setAddedPup] = useState([]);

  // Give success message, and render pup to page. How to render created pup?

  const api = `https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-b/players`;

  function handleUserChange(e) {
    const { name, value } = e.target;
    console.log(name);
    setNewPuppy((preValue) => {
      return { ...preValue, [name]: value };
    });
  }

  async function addPup(e) {
    e.preventDefault();
    try {
      axios
        .post(api, newPuppy)
        .then(function (response) {
          setAddedPup(response.data.data.newPlayer);
          console.log(addedPup);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      console.error("Issue adding player!", err);
    }
  }

  return (
    <>
      <h1>Puppy Bowl Form</h1>
      Please fill out the form below.
      <form onSubmit={(e) => addPup(e)}>
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
        <label htmlFor="picture" id="img">
          Puppy Picture
          <input
            type="text"
            name="imageUrl"
            value={newPuppy.imageUrl}
            onChange={(e) => handleUserChange(e)}
          />
        </label>
        <br />
        <label htmlFor="status">
          Do you want your puppy on the bench or on the field?
          <select required onChange={(e) => handleUserChange(e)} name="status">
            <option value={"bench"}>Bench</option>
            <option value={"field"}>Field</option>
          </select>
        </label>
        <button type="submit">Submit!</button>
      </form>
      <section>
        When you press submit if your puppy is succeffully added it will preview
        below
        {{ addedPup } && <h2>{addedPup.name}</h2>}
        {{ addedPup } && (
          <img src={addedPup.imageUrl} alt="no url added" id="img" />
        )}
        {{ addedPup } && <p>{addedPup.breed}</p>}
        {{ addedPup } && <p>{addedPup.status}</p>}
      </section>
    </>
  );
}

export default PuppyForm;
