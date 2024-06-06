import { Dictionairy } from "../abstracts/Dictionairy";

export class User {
  Id!: number;
  Firstname!: string;
  Lastname!: string;
  Email!: string;
  Phonenumber!: string;
  Settings!: Dictionairy<boolean>;

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    phonenumber: string,
  ) {
    this.Id = 0;
    this.Firstname = firstname;
    this.Lastname = lastname;
    this.Email = email;
    this.Phonenumber = phonenumber;
    this.Settings = {};
  }
}
