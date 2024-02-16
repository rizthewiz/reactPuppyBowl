import React, { useState, useEffect } from "react";
import Home from "./Home";
import { useParams } from "react-router-dom";
import axios from "axios";

function SelectedPuppy() {
  const { id } = useParams();
  const [selectedPuppy, setSelectedPuppy] = useState({});
  const api = `https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-b/players`;

  useEffect(() => {
    async function getPups() {
      try {
        const pups = await axios(`${api}/${id}`);
        setSelectedPuppy(pups.data.data.player);
      } catch (err) {
        console.error("Issue getting players!", err);
      }
    }
    getPups();
  }, []);

  return (
    <>
      <h1>Puppy Bowl</h1>
      <h2>{selectedPuppy.name}</h2>
      <img src={selectedPuppy.imageUrl} alt="no image" />
      <p>{selectedPuppy.breed}</p>
      <p>{selectedPuppy.status}</p>
      <br />
      Adding an edit and delete button and will put functionality for PUT/DELETE
      here
    </>
  );
}

export default SelectedPuppy;
