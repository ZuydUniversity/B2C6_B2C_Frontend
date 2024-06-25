import { apiUrl, Dictionary } from "../abstracts/Constances";

export class User {
	Id!: number;
	Firstname!: string;
	Lastname!: string;
	Email!: string;
	Phonenumber!: string;
	Settings!: Dictionary<boolean>;

	constructor(firstname: string, lastname: string, email: string, phonenumber: string) {
		this.Id = 0;
		this.Firstname = firstname;
		this.Lastname = lastname;
		this.Email = email;
		this.Phonenumber = phonenumber;
		this.Settings = {};
	}

	// User functions
	// --------------

	/**
	 * Update the user in the database
	 */
	updateUser() {
		// Update the user in the database
		const user = this;
	}

	// Settings functions
	// ------------------

	/**
	 * Get the settings of the user
	 * @returns {Dictionary<boolean>} The settings of the user
	 */
	getSettings() {
		return this.Settings;
	}

	/**
	 * Set a setting of the user
	 * @param key The key of the setting
	 * @param value The value of the setting as a boolean
	 */
	setSetting(key: string, value: boolean) {
		if (this.Settings[key] === undefined) {
			this.Settings[key] = value;
			this.updateUser();
		}
	}

	/**
	 * Get a setting of the user
	 * @param key The key of the setting
	 * @returns The value of the setting as a boolean
	 */
	getSetting(key: string) {
		return this.Settings[key];
	}

	/**
	 * Remove a setting of the user
	 * @param key The key of the setting
	 */
	removeSetting(key: string) {
		delete this.Settings[key];
		this.updateUser();
	}
}
