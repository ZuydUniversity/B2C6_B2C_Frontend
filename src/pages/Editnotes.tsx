import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Note } from "../abstracts/ImportsModels";
import "./styles/notes.css";

const EditNote: React.FC = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const { note } = location.state as { note: Note };

   const handleFormSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      // Here you can add code to save the note changes if needed
      navigate("/notes");
   };

   return (
      <div className="general-container">
         <h1 className="notes-header">Bewerk Notitie</h1>

         {/* Container for the note details (with border) */}
         <div className="notes-container">
            <div className="notes-container-inside">
               <div className="note-detail">
                  <h2>Notitie</h2>
                  <p><strong>Naam:</strong> {note.Name}</p>
               </div>

               <div className="note-detail">
                  <h2>Specialist</h2>
                  <p>{note.Specialist?.Firstname} {note.Specialist?.Lastname}</p>
               </div>

               <div className="note-detail">
                  <h2>Patiënt</h2>
                  <p>{note.Patient ? `${note.Patient.Firstname} ${note.Patient.Lastname}` : "-"}</p>
               </div>

               <div className="note-detail">
                  <h2>Sessie</h2>
                  <p>{note.Session ? note.Session.Name : "-"}</p>
               </div>

               {/* Edit Form */}
               <div className="edit-form">
                  <h2>Bewerk Notitie</h2>
                  <form onSubmit={handleFormSubmit}>
                     <div className="form-group">
                        <input type="text" id="noteName" defaultValue={note.Name} />
                     </div>
                     <button type="submit">Opslaan</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default EditNote;
