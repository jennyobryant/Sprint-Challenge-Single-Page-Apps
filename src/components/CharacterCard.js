import React from "react";

export default function CharacterCard(props) {
  return <span> 
    
    <img src = { props.data.image }></img>
    <div> { props.data.name }</div>
    <div> { props.data.status }</div>
    <div> { props.data.location.name }</div>
   
    
    </span>;
}
