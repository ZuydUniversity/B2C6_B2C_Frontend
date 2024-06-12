import { Dictionary } from "../abstracts/Dictionary";

export class User {
  _id!: number;
  Firstname!: string;
  Lastname!: string;
  Email!: string;
  Phonenumber!: string;
  Settings!: Dictionary<boolean>;

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    phonenumber: string,
  ) {
    this._id = 0;
    this.Firstname = firstname;
    this.Lastname = lastname;
    this.Email = email;
    this.Phonenumber = phonenumber;
    this.Settings = {};
  }
}
