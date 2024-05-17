import React, { useEffect, useState } from 'react';

import { Navigate } from "react-router-dom";
import { Docter } from "../abstracts/export-models";

import '../App.css';
import '../styles/DeleteDocterForm.css';

export default function DeleteDocterForm() {
  const [deletedocter,  setDeleteDocter] = useState<Docter>(new Docter());

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        let docterid:HTMLInputElement = document.getElementById("docterid") as HTMLInputElement;
        const id: number = parseInt(docterid.value);
        await Docter.deleteDocter(id);
        window.location.reload();
    }
    catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  return (
    <div className='delete-docter-form'>
      <h1 className='delete-docter-form-title'>Delete Docter</h1>
      <form onSubmit={handleSubmit} className='delete-docter-input-container' id='form-docter-creation'>
      <input 
          type="number"
          id="docterid"
          placeholder='Docters ID'
          className='create-docter-input'
        />
        <button type="submit" className='delete-docter-submit-btn' id="delete-docter-form-submit-btn">Submit</button>
      </form>
    </div>
  );
}