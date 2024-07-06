import React from "react";
import { Note } from "../abstracts/ImportsModels";
import "./componentstyles/notelistitem.css";

interface NoteProps {
	note: Note;
	onClick: () => void;
}

const NoteListItem: React.FC<NoteProps> = ({ note, onClick }) => {
	return (
		<div className="note-list-container" onClick={onClick}>
			<div className="note-list-item no-link">
				<div className="note-name">{note.Name}</div>

				<div className="note-specialist">
					{note.Specialist?.Firstname} {note.Specialist?.Lastname}
				</div>

				<div className="note-patient">{note.Patient != null ? `${note.Patient.Firstname} ${note.Patient.Lastname}` : "-"}</div>

				<div className="note-session">{note.Session != null ? note.Session.Name : "-"}</div>
			</div>
		</div>
	);
};

export default NoteListItem;
