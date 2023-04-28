import React, { useState, useEffect } from "react";

function App() {
  const [dogBreeds, setDogBreeds] = useState ([]);
  const [isLoaded, setIsLoaded] = useState(false);


 useEffect(() => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      setDogBreeds(data.dog);
      setIsLoaded(true);
    })

}, []);

if(!isLoaded) return <p>Loading...</p>
return <div>{dogBreeds.map((dog) => <img alt="A Random Dog">dog.image</img>)}</div>;

}


export default App;
