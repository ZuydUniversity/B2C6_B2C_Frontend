import React, { useState, useEffect } from 'react';
import PersonForm from './PersonForm';
import "./index.css";

function App() {
  // State hook to manage the list of items (persons data)
  const [items, setItems] = useState([]);

  // useEffect hook to fetch data from the API when the component mounts
  useEffect(() =>{

    const fetchData = async () => {

      try
      {

        // Fetch data from the API endpoint
        const Response = await fetch('http://localhost:8000/api/person/');
        
        // Check if the response is not successful (status not in the range of 200-299)
        if (!Response.ok)
        {

          throw new Error("Failed to fetch data!");

        }

        // Convert the response data to JSON format
        const Data = await Response.json();
        // Update the items state with the fetched data
        setItems(Data);

      }
      catch (error)
      {

        console.error("Error fetching data: ", error);

      }

   }

    // Call fetchData function when the component mounts (empty dependency array)
   fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  // Render the form components
  return (
    <div className='InputBox'>

      <h1>Person List</h1>

      <div className='DataList'>

        <ul>

          {items.map((item) => ( // Starts looping over all the items in items and adding them to the html list

            <li key={item.id}>
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
