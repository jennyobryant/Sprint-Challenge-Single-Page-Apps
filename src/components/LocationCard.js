import React from "react";

export default function LocationCard(props) {
  return <span className = "location-card">

    <h2> { props.data.name }</h2>
    <div> { props.data.type } - { props.data.dimension }</div>
    <div className ="location-resident"> { props.data.residents.length} residents</div>
 
  </span>;
}
