import React, { useEffect, useState } from 'react';

import { Navigate } from "react-router-dom";
import { Docter } from "../abstracts/export-models";

import '../App.css';
import '../styles/CreateDocterForm.css';

export default function CreateStudentForm() {
  const [newDocter, setNewDocter] = useState<Docter>(new Docter());

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let docterFirstname:HTMLInputElement = document.getElementById("firstname") as HTMLInputElement;
      let docterLastname:HTMLInputElement = document.getElementById("lastname") as HTMLInputElement;
      let docterprofession:HTMLInputElement = document.getElementById("profession") as HTMLInputElement;
      let doctersalary:HTMLInputElement = document.getElementById("salary") as HTMLInputElement;

      let docter:Docter = new Docter(docterFirstname.value, docterLastname.value, docterprofession.value, parseInt(doctersalary.value));

      await Docter.createNewDocter({ docter:docter });
      window.location.reload();
    }
    catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  return (
    <div className='create-docter-form'>
      <h1 className='create-docter-form-title'>Create Docter</h1>
      <form onSubmit={handleSubmit} className='create-docter-input-container' id='form-docter-creation'>
        <input 
          type="text"
          id="firstname"
          placeholder='Firstname'
          value={newDocter.firstname}
          className='create-docter-input'
        />
        <br/>
        <input 
          type="text"
          id="lastname"
          placeholder='Lastname'
          value={newDocter.lastname}
          className='create-docter-input'
        />
        <br/>
        <input 
          type="text"
          id="profession"
          placeholder='Profession'
          value={newDocter.profession}
          className='create-docter-input'
        />
        <br/>
        <input 
          type="number"
          id="salary"
          placeholder='Salary'
          value={newDocter.salary}
          className='create-docter-input'
        />
        <br/>
        <button type="submit" className='create-docter-submit-btn' id="create-docter-form-submit-btn">Submit</button>
      </form>
    </div>
  );
}