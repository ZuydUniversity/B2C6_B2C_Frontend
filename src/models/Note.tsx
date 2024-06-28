import { Specialist, Patient, Session } from "../abstracts/ImportsModels";
import { apiUrl } from "../abstracts/Constances";

export class Note {
	Id!: number | null;
	Name!: string;
	Description!: string;
	Specialist!: Specialist;
	Patient!: Patient | null;
	Session!: Session | null;

	constructor(name: string, description: string, specialist: Specialist, patient: Patient | null = null, session: Session | null = null) {
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

  async getallnotes() {
    try {
      const response = await fetch(`${apiUrl}/notes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      if (response) {
        const data = await response.json();
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
    } catch {
      throw new Error("No connection to the server");
    }
  }
}