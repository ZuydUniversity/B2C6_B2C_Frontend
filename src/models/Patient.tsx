import { Specialist, Note, Medication, Appointment } from "../abstracts/ImportsModels";

let tempId = 0;

export class Patient {
	Id!: number;
	Firstname!: string;
	Lastname!: string;
	Email!: string;
	Age!: number;
	Phonenumber!: string;
	Sex!: string;
	EmailContact!: string;
	PhonenumberContact!: string;
	ImagePath!: string;
	Specialists!: Array<Specialist>;
	Notes!: Array<Note>;
	Medications!: Array<Medication>;
	Appointments!: Array<Appointment>;

	constructor(firstname: string, lastname: string, email: string, age: number, phonenumber: string, email_contact: string, phonenumber_contact: string, sex: string, imagePath: string = "") {
		this.Id = tempId++;
		this.Firstname = firstname;
		this.Lastname = lastname;
		this.Email = email;
		this.Age = age;
		this.Phonenumber = phonenumber;
		this.EmailContact = email_contact;
		this.PhonenumberContact = phonenumber_contact;
		this.Sex = sex;
		this.ImagePath = imagePath;
		this.Specialists = [];
		this.Notes = [];
		this.Medications = [];
		this.Appointments = [];
	}
}
