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
        const pup = await axios(`${api}/${id}`);
        setSelectedPuppy(pup.data.data.player);
        console.log(pup);
      } catch (err) {
        console.error("Issue getting player!", err);
      }
    }
    getPups();
  }, []);

  async function deletePup() {
    axios
      .delete(`${api}/${id}`)
      .then((response) => {
        console.log(`Deleted ${selectedPuppy.name}`);
      })
      .catch((error) => {
        console.erroe(error);
      });
  }

  return (
    <>
      <section>
        <h1>Puppy Bowl</h1>
        <h2>{selectedPuppy.name}</h2>
        <img src={selectedPuppy.imageUrl} alt="no image" />
        <p>{selectedPuppy.breed}</p>
        <p>{selectedPuppy.status}</p>
        <br />
        <button>Edit Pup</button>
        <button onClick={deletePup}>Remove Pup</button>
        Adding an edit and delete button and will put functionality for
        PUT/DELETE here
      </section>
    </>
  );
}

export default SelectedPuppy;
