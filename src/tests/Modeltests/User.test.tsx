import { Dictionary } from "../../abstracts/Dictionary";
import { User } from "../../abstracts/ImportsModels";

describe("User", () => {
	const firstname = "John";
	const lastname = "Doe";
	const email = "JohnDoe@gmail.com";
	const phonenumber = "0612345678";
	const settings: Dictionary<boolean> = {
		isDarkMode: true,
	};

	it("should create a new user with all the provided properties", () => {
		const user = new User(firstname, lastname, email, phonenumber);

		expect(user._id).toBe(0);
		expect(user.Firstname).toBe(firstname);
		expect(user.Lastname).toBe(lastname);
		expect(user.Email).toBe(email);
		expect(user.Phonenumber).toBe(phonenumber);
	});

	it("should create a new user with the provided settings", () => {
		const user = new User(firstname, lastname, email, phonenumber);
		user.Settings = settings;

		expect(user.Settings).toBe(settings);
	});

	it("should update the users contact information", () => {
		const user = new User(firstname, lastname, email, phonenumber);
		const newEmail = "Doe.John@gmail.com";
		const newPhonenumber = "0687654325";

		expect(user.Email).toBe(email);
		expect(user.Phonenumber).toBe(phonenumber);

		user.Email = newEmail;
		user.Phonenumber = newPhonenumber;

		expect(user.Email).toBe(newEmail);
		expect(user.Phonenumber).toBe(newPhonenumber);
	});

	it("should update the users settings", () => {
		const user = new User(firstname, lastname, email, phonenumber);
		user.Settings = settings;
		const newSettings: Dictionary<boolean> = {
			isDarkMode: false,
		};

		expect(user.Settings).toBe(settings);

		user.Settings = newSettings;

		expect(user.Settings).toBe(newSettings);
	});

	it("should set a new setting", () => {
		const user = new User(firstname, lastname, email, phonenumber);
		user.Settings = JSON.parse(JSON.stringify(settings));
		const oldSettings = JSON.parse(JSON.stringify(user.Settings));

		expect(user.Settings).toStrictEqual(settings);

		user.setSetting("receivesMessages", true);

		expect(settings).toStrictEqual(oldSettings);
		expect(user.Settings).not.toBe(oldSettings);
	});

	it("should get the settings", () => {
		const user = new User(firstname, lastname, email, phonenumber);
		user.Settings = JSON.parse(JSON.stringify(settings));

		expect(user.Settings).toStrictEqual(settings);
		expect(user.getSettings()).toStrictEqual(settings);
	});

	it("should delete a setting", () => {
		const user = new User(firstname, lastname, email, phonenumber);
		user.Settings = JSON.parse(JSON.stringify(settings));

		expect(user.Settings).toStrictEqual(settings);

		user.removeSetting("isDarkMode");

		expect(user.Settings).not.toBe(settings);
		expect(user.Settings["isDarkMode"]).toBeUndefined();
	});

	it("should get the requested setting", () => {
		const user = new User(firstname, lastname, email, phonenumber);
		user.Settings = JSON.parse(JSON.stringify(settings));

		expect(user.Settings).toStrictEqual(settings);
		expect(user.getSetting("isDarkMode")).toBe(true);
	});
});
