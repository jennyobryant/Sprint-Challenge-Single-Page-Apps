import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
const [EpisodeList, setEpisodeList] = useState([]); 

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(response => {
        console.log(response.data); // go to console browser, and check the object lists (results)
        setEpisodeList(response.data.results); 
      })
      .catch(error => {
        console.error(error); 
      }); 

  }, []);

  return (
    <section className="episode-list grid-view">
      
      {EpisodeList.map(e =>
        <EpisodeCard key={e.id} data={e} /> //key word to id to help browser to hold each individual data
          )}
      
    </section>
  );
}