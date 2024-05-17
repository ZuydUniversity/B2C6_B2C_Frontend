const urldocter = "http://127.0.0.1:8000/docter/";
const urldocters = "http://127.0.0.1:8000/docters/";
const urlcreatedocter = "http://127.0.0.1:8000/doctercreate/";
const urldeletedocter = "http://127.0.0.1:8000/docterdelete/";
//const urlApi = "http://#.azurewebsites.net/api/student/"; // web url

export class Docter {
  id?: number;
  firstname?: string;
  lastname?: string;
  profession?: string;
  salary?: number;

  constructor(firstname?:string, lastname?:string, profession?:string, salary?:number) {
    this.id = 0;
    this.firstname = firstname;
    this.lastname = lastname;
    this.profession = profession;
    this.salary = salary;
  }

  /**
   * Creates a new student and throws it to the Backend
   * @param docter The newly created student
   */
  static async createNewDocter({ docter }: { docter:Docter }) {
    try {
      const response = await fetch(
        urlcreatedocter,
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(docter),
        }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response}`);
      }
    }
    catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  /**
   * Get a list of all students from the API
   * @returns A List of all Students as the Student object
   */
  static async getAllDocters():Promise<Docter[]> {
    try {
      const response = await fetch(urldocters);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const docterData = await response.json();
      console.log(docterData)
      const docters: Docter[] = docterData.map((docter: Docter) => ({
        id: docter.id,
        firstname: docter.firstname,
        lastname: docter.lastname,
        profession: docter.profession,
        salary: docter.salary
    }));
      console.log(docters)
      return docters;
    }
    catch (error) {
      throw new Error('Failed to fetch docter data');
    }
  }

  static async deleteDocter(docterid: number ) {
    try {
      const urldeletedocterwithid = urldeletedocter + docterid.toString() + "/";
      const response = await fetch(
        urldeletedocterwithid,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) 
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    catch (error) {
      throw new Error('Failed to delete docter data');
    }
  }
}