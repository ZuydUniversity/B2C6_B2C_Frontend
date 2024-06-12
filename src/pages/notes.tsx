import React from "react";
import "./styles/notes.css";
import NoteListItem from "../components/notelistitem";
import { Note, Specialist } from "../abstracts/ImportsModels";

const baseSpecialist = new Specialist("John", "Doe", "JohnDoe@gmail.com", "0612345678");

var notes: Note[] = [
  new Note("Note 1", "This is the first note.", baseSpecialist),
  new Note("Note 2", "This is the second note.", baseSpecialist),
  new Note("Note 3", "This is the third note.", baseSpecialist),
];

const Notes: React.FC = () => {
  return (
    <div className="notes-background">
      {/* Title bar in container */}
      <div className="notes-title">
        <h1 className="">
          Notes
        </h1>
      </div>  	

      {/* Container for the list of notes */}
      <div className="notes-container">
        {/* Filter buttons */}
        <div className="notes-filter">
          Filter
        </div>

        {/* List of notes */}
        <div className="notes-list">
          {
            notes.map((note: Note, index: number) => {
              return <NoteListItem key={note.Id ?? index} note={note} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Notes;