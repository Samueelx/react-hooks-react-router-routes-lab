import React from "react";
import { directors } from "../data";

function Directors() {
  const element = directors.map((director, index) => {
    return (<div key={index}>
      <h3>Name: {director.name}</h3>
      <p>Movies: </p>
      <ul>
        {director.movies.map((movie, i) => <li key={i}>{movie}</li>)}
      </ul>
    </div>)
  });


  return <div>
    <h1>Directors Page</h1>
    {element}
  </div>;
}

export default Directors;
