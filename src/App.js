import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonForm from './PersonForm';
import "./index.css";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() =>{

    axios.get('http://localhost:8000/api/person/')
    .then((Response) => { setItems(Response.data); })
    .catch(error => {console.error("Error fetching data: ", error); });

  }, []);

  return (
    <div className='InputBox'>

      <h1>Person List</h1>

      <div className='DataList'>

        <ul>

          {items.map((item) => (

            <li key="{item.id}">
              {item.FirstName} {item.LastName} is {item.Age} years old
            </li>

          ))}

        </ul>

      </div>

      <div className='DataForm'>

        <h1>Insert Person Data</h1>
        <PersonForm />

      </div>

    </div>

  );
}

export default App;
