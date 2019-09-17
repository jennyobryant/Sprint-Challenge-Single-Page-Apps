import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [CharacterList, setCharacterList] = useState([]); 

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data); // go to console browser, and check the object lists (results)
        setCharacterList(response.data.results); 
      })
      .catch(error => {
        console.error(error); 
      }); 

  }, []);

  return (
    <section className="character-list grid-view">
        
        {CharacterList.map(c =>
        <CharacterCard key={c.id} data={c} />
          )}
    </section>
  );
}
