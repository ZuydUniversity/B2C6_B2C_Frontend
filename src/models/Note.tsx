import { Specialist, Patient, Session } from "../abstracts/ImportsModels";
import { apiUrl } from "../abstracts/Constances";
import { stringify } from "querystring";

export class Note {
	Id!: number | null;
	Name!: string;
	Description!: string;
	Specialist!: Specialist | null;
	Patient!: Patient | null;
	Session!: Session | null;

	constructor(name: string, description: string, specialist: Specialist | null = null, patient: Patient | null = null, session: Session | null = null) {
		this.Id = null;
		this.Name = name;
		this.Description = description;
		this.Specialist = specialist;
		this.Patient = patient;
		this.Session = session;
	}

  // Note functions
  // --------------

  /**
   * Get the all the notes of the specialist
   * @returns {Array<Note>} The notes of the specialist
   */

  async getAllNotes() {
    try {
      const response = await fetch(`${apiUrl}/notes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      if (response) {
        const data = await response.json();
        if (data["message"]["success"] !== true) 
        {
          throw new Error("Note is not retrieved");
        }
        else
        {
        const notes: Array<Note> = [];
          data["notes"].forEach((note: any) => {
            const newNote = new Note(
              note["name"],
              note["description"],
              note["specialist"],
              note["patient"],
              note["session"]
            );
            newNote.Id = note["id"];
            notes.push(newNote);
          });

        return notes;       
      }
    }
    } catch {
      throw new Error("No connection to the server");
    }
  }
  async getspecificNotebyId() {
    try {
      const response = await fetch(`${apiUrl}/notes/${this.Id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
    
      if (response) {
        const data = await response.json();
        if (data["message"]["success"] !== true) 
        {
          throw new Error("Note is not retrieved");
        }
        else
        {
            const data = await response.json();
            const note = data["note"];
            const newNote = new Note(
                  note["name"],
                  note["description"],
                  note["specialist"],
                  note["patient"],
                  note["session"]
              );
                newNote.Id = note["id"];
                return newNote;       
          };    
        }
      }
    catch 
    {
      throw new Error("No connection to the server");
    }
  }

  async postNote() {

    const createNote = JSON.stringify(this);

    try {
      const response = await fetch(`${apiUrl}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: createNote,
      });

      if (response) {
        const data = await response.json();
        if (data["message"]["success"] !== true) 
        {
          throw new Error("Note is not saved");
        }
      } 
    }
    catch 
    {
      throw new Error("No connection to the server");
    }
  }

  async deleteNote() {
    try {
      const response = await fetch(`${apiUrl}/notes/${this.Id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response) {
        const data = await response.json();
        if (data["message"]["success"] !== true) 
        {
          throw new Error("Note is not deleted");
        }
      } 
    }
    catch 
    {
      throw new Error("No connection to the server");
    }
  }

    /**
   * Patch a note by sending an update request to the server.
   *
   * @return {Promise<void>} Promise that resolves when the note is successfully patched.
   */
  async patchNote() {
    const updateNote = JSON.stringify(this);

    try {
      const response = await fetch(`${apiUrl}/notes/${this.Id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: updateNote,
      });

      if (response) {
        const data = await response.json();
        if (data["message"]["success"] !== true) 
        {
          throw new Error("Note is not saved");
        }
      } 
    }
    catch 
    {
      throw new Error("No connection to the server");
    }
  }
}
