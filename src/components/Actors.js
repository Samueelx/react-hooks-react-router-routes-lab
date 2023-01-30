import React from "react";
import { actors } from "../data";

function Actors() {
  const element = actors.map((actor, index) => {
    return <div key={index}>
      <h3>Name: {actor.name}</h3>
      <ul>
        {actor.movies.map((movie, i) => <li key={i}>{movie}</li>)}
      </ul>
    </div>
  });
  return <div>
    <h1>Actors Page</h1>
    {element}
  </div>;
}

export default Actors;
