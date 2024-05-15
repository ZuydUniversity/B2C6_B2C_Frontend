import React, { useState, useEffect } from 'react';
import PersonForm from './PersonForm';
import "./index.css";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() =>{

    const fetchData = async () => {

      try
      {

        const Response = await fetch('http://localhost:8000/api/person/');
        if (!Response.ok)
        {

          throw new Error("Failed to fetch data!");

        }

        const Data = await Response.json();
        setItems(Data);

      }
      catch (error)
      {

        console.error("Error fetching data: ", error);

      }

   }

   fetchData();
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
