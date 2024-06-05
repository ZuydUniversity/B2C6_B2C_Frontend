// src/types/types.ts
export interface Patient {
    id: number;
    name: string;
    age: number;
    diagnosis: string;
    medication: string;
    appointments: string;
    image: string;
    nextAppointment: string;
  }
  
  export interface PatientDetailsProps {
    patients: Patient[];
  }
  
  export interface ContactPerson {
    name: string;
    phone: string;
    email: string;
  }
  