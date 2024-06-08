// src/types/types.ts
export interface Patient {
    id: number;
    name: string;
    birthdate: string;
    diagnosis: string;
    appointments: string;
  }

  export interface PatientDetailsProps {
    patients: Patient[];
  }
  
  export interface ContactPerson {
    name: string;
    phone: string;
    email: string;
  }