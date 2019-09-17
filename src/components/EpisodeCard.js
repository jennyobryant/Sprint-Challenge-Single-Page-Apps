import React from "react";

export default function EpisodeCard(props) {
  return <span className = "episode-card"> 
    <h2> { props.data.name }</h2>
    <div> { props.data.created }</div>
    <div> { props.data.episode }</div> 
    </span>;
}
