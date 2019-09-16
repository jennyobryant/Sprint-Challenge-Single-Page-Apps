import React from "react";

export default function LocationCard(props) {
  return <span>

    <div> { props.data.name }</div>
    <div> { props.data.type }</div>
    <div> { props.data.dimension }</div>
 
  </span>;
}
