import React, { useState, useEffect } from "react";  

function App() {
  const api={
    base: "https://v2.jokeapi.dev/joke/",
    type: "Programming"
  }
  const [joke,setJoke]=useState('');
  // let joke='';

  // useEffect(() => {
  //   setInterval(newJoke,5000);
  //   clearInterval();
  // },[]);
  function newJoke(){ 
    const jokeFetch = fetch(`${api.base}${api.type}?safe-mode`)
                    .then(res => res.json())
                    .then(result => {
                      setJoke(result);
                      // joke=result;
                      // console.log(result);
                      console.log(joke);
                      // console.log(joke.setup);
                      // console.log(joke.delivery);
                    });
  }

  // newJoke();
  // setInterval(newJoke,10000);


  return (<div>
    <center>
    <h1>{joke.setup}</h1>
    <h1>{joke.delivery}</h1>
    <h1>{joke.joke}</h1>
    <button className="jokeButton" onClick={newJoke}>New Joke</button>
    </center>
    </div>
  );
}

export default App;
