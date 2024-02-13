import { useEffect, useState } from "react";
import axios from "axios";
import SingleView from "./SingleView";

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
      <div>
        {puppies.map((pup) => {
          return (
            <SingleView
              key={pup.id}
              name={pup.name}
              breed={pup.breed}
              status={pup.status}
              img={pup.imageUrl}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
