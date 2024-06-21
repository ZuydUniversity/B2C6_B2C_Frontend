import { Specialist, Note, Medication, Appointment } from "../abstracts/ImportsModels";

export class Patient {
	Id!: number;
	Firstname!: string;
	Lastname!: string;
	Email!: string;
	Age!: number;
	Phonenumber!: string;
	Sex!: boolean; // True = Male | False = Female
	FirstnameContact!: string;
	LastnameContact!: string;
	EmailContact!: string;
	PhonenumberContact!: string;
	Specialists!: Array<Specialist>;
	Notes!: Array<Note>;
	Medications!: Array<Medication>;
	Appointments!: Array<Appointment>;

	constructor(firstname: string, lastname: string, email: string, age: number, phonenumber: string, sex: boolean, firstname_contact: string, lastname_contact: string, email_contact: string, phonenumber_contact: string) {
		this.Id = 0;
		this.Firstname = firstname;
		this.Lastname = lastname;
		this.Email = email;
		this.Age = age;
		this.Phonenumber = phonenumber;
		this.Sex = sex;
		this.FirstnameContact = firstname_contact;
		this.LastnameContact = lastname_contact;
		this.EmailContact = email_contact;
		this.PhonenumberContact = phonenumber_contact;
		this.Specialists = [];
		this.Notes = [];
		this.Medications = [];
		this.Appointments = [];
	}
}
