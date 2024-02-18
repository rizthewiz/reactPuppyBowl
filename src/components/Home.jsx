import { useEffect, useState } from "react";
import axios from "axios";
import SingleView from "./SingleView";
import { Link } from "react-router-dom";

function Home() {
  const [puppies, setPuppies] = useState([]);

  const api = `https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-b/players`;

  useEffect(() => {
    async function getPups() {
      try {
        const pups = await axios(api);
        setPuppies(pups.data.data.players);
      } catch (err) {
        console.error("Issue getting players!", err);
      }
    }
    getPups();
  }, []);
  return (
    <>
      <h1>Puppy Bowl</h1>
      Form to add Pups here along with functionality to POST
      <h2>
        Want to add a puppy? <Link to={`/puppyform`}>Click here</Link>
      </h2>
      <div>
        {puppies.map((pup) => {
          return (
            <SingleView
              key={pup.id}
              name={pup.name}
              // breed={pup.breed}
              // status={pup.status}
              img={pup.imageUrl}
              id={pup.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
