import React, { useEffect, useState } from 'react';

import { Navigate } from "react-router-dom";
import { Docter } from "../abstracts/export-models";
import { CreateDocterForm, DeleteDocterForm } from "../abstracts/export-pages";

import '../App.css';
import '../styles/HelloWorld.css';

export default function HelloWorld() {
  const [docters, setDocters] = useState<Docter[]>([]);
  const [foundError, setFoundError] = useState<Boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedDocters = await Docter.getAllDocters();
        setDocters(fetchedDocters);
      } catch (error) {
        setFoundError(true);
      }
    }

    fetchData();

    return () => {
      // cleanup if needed
    }
  }, []);

  return (
    <div className="App">
      <div className='docter-container'>
        <h1 className='docter-container-titel'>List of Docters</h1>
        <div className='docter-list-container'>
          {docters.map((docter) => {
            return (
            <p key={docter.id} className='docter-list-element'>
              {docter.id} | {docter.firstname} | {docter.lastname} | {docter.profession} | {docter.salary}
            </p>
            )
          })}
        </div>
      </div>

      <div>
        <CreateDocterForm />
      </div>
      
      <div>
        <DeleteDocterForm />
      </div>

    </div>
  );
}