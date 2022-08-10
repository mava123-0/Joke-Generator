import React, { useState, useEffect } from "react";  
import intro_title from "./intro_title";

function JokeDisplay() {

  const api={
    base: "https://v2.jokeapi.dev/joke/",
    type: "Programming"
  }

  function printInitial(joke){
    return(
      <div>
      <h1>{joke.setup}</h1>
        <h1>{joke.delivery}</h1>
      </div>
    )
  }

  const [joke,setJoke]=useState({intro_title});
  printInitial(joke)

  function newJoke(){ 
    const jokeFetch = fetch(`${api.base}${api.type}?safe-mode`)
                    .then(res => res.json())
                    .then(result => {
                      setJoke(result);
                      // joke=result;
                      // console.log("clickedd");
                      // console.log(result);
                      // console.log(joke);
                    });
  }

  return (<div>

    <div>
      <center>
      <h1>{joke.setup}</h1>
      <h1>{joke.delivery}</h1>
      <h1>{joke.joke}</h1>
      <button className="jokeButton" onClick={newJoke}>></button>
      </center>
    </div>

    </div>
  );
}

export default JokeDisplay;
