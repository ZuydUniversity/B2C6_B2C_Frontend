import React from "react";
import { Note } from "../abstracts/ImportsModels";
import "./componentstyles/notelistitem.css";

interface NoteProps {
	note: Note;
}

const NoteListItem: React.FC<NoteProps> = ({ note }) => {
	return (
		<div className="note-list-container">
			<a href="/notelist" className="note-list-item no-link">
				<div className="note-name">{note.Name}</div>

				<div className="note-specialist">
					{note.Specialist?.Firstname} {note.Specialist?.Lastname}
				</div>

				<div className="note-patient">{note.Patient != null ? note.Patient.Firstname + " " + note.Patient.Lastname : "-"}</div>

				<div className="note-session">{note.Session != null ? note.Session.Name : "-"}</div>
			</a>
		</div>
	);
};

export default NoteListItem;
