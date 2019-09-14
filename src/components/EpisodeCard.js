import React from "react";

export default function EpisodeCard(props) {
  return <span> 
    <div> { props.data.name }</div>
    <div>= { props.data.created }</div>
    <div> { props.data.episode }</div> 
    </span>;
}
