import React from "react";

export default function CharacterCard(props) {
  return <span className = "character-card"> 
    
    <img src = { props.data.image }></img>
    <h2> { props.data.name }</h2>
    <div> { props.data.status }</div>
    <div> { props.data.location.name }</div>
   
    
    </span>;
}
