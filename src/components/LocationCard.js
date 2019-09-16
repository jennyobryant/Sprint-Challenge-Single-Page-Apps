import React from "react";

export default function LocationCard(props) {
  return <span>

    <div> { props.data.name }</div>
    <div> { props.data.type } - { props.data.dimension }</div>
    <div> { props.data.residents.length} residents</div>
 
  </span>;
}
