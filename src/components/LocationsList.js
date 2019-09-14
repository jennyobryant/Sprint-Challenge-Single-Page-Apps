import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [LocationsList, setLocationsList] = useState([]); 
    useEffect(() => {
        axios
        .get (`https://rickandmortyapi.com/api/location/`)
        .then(response => {
            console.log(response.data); // go to console browser, and check the object lists (results)
            setLocationsList(response.data.results); 
          })
          .catch(error => {
            console.error(error); 
          }); 
    
      }, []);

      return (
        <section className="location-list grid-view">
          <h2>
          {LocationsList.map(l =>
                <LocationCard key={l.id} data={l} />
          )}
              
          </h2>
        </section>
      );
    }
    
