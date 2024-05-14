import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [drinkName, setDrinkName] = useState(null);

  useEffect(() => {
    if (!searchTerm) {
      setDrinkName(null); // Reset drinkName if searchTerm is empty
      return;
    }

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        if (data.drinks && data.drinks.length > 0) {
          setDrinkName(data.drinks[0].strDrink);
        } else {
          setDrinkName('Drink not found');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [searchTerm]);

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div class="test">
        <h1>Welcome to my app</h1>
      </div>
      <div class="test">
        <input
          type="text"
          placeholder="Enter drink name"
          value={searchTerm}
          onChange={handleInputChange}
        />
        </div>
        <div class="test">
        <p>Drink Name: {drinkName}</p>
        </div>
        <img class="Image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.udacity.com%2Fblog%2Fwp-content%2Fuploads%2F2020%2F11%2FHello-World_Blog-scaled.jpeg&f=1&nofb=1&ipt=b66752f2f6a1495594881ad2b96d3838c273feded852265edb11812227253a6b&ipo=images" alt="HELLO WORLD"></img>
      </div>
    
  );
}

export default App;