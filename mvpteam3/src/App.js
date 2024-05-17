import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      setPeople([]); // Reset people if searchTerm is empty
      return;
    }

    fetch(`http://pythonbackend.eueahdc3epg9b3a6.westeurope.azurecontainer.io/people/${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        setPeople(data); // Store the entire person object
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
      <div className="test">
        <h1>Welcome to my app</h1>
      </div>
      <div className="test">
        <input
          type="text"
          placeholder="Enter name"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <div className="test">
        <p>Names:</p>
        <ul className="names-list">
          {people.map((person, index) => (
            <li key={index}>
              {person.name} ({person.age})
            </li>
          ))}
        </ul>
      </div>
      <img
        className="Image"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.udacity.com%2Fblog%2Fwp-content%2Fuploads%2F2020%2F11%2FHello-World_Blog-scaled.jpeg&f=1&nofb=1&ipt=b66752f2f6a1495594881ad2b96d3838c273feded852265edb11812227253a6b&ipo=images"
        alt="HELLO WORLD"
      />
    </div>
  );
}

export default App;
