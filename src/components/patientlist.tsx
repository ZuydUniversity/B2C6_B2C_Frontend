import './componentstyles/patientlist.css';

const PatientList = () => {
  const patients = [
    { id: 1, name: 'John Doe', geboortedatum: '01-01-1990', diagnosis: 'JDM', medication: 'x medicijn', appointments: '3'},
    { id: 2, name: 'John Doe', geboortedatum: '01-01-1990', diagnosis: 'JDM', medication: 'x medicijn', appointments: '3'},
    { id: 3, name: 'John Doe', geboortedatum: '01-01-1990', diagnosis: 'JDM', medication: 'x medicijn', appointments: '3'},
    { id: 4, name: 'John Doe', geboortedatum: '01-01-1990', diagnosis: 'JDM', medication: 'x medicijn', appointments: '4'},
    { id: 1, name: 'John Doe', geboortedatum: '01-01-1990', diagnosis: 'JDM', medication: 'x medicijn', appointments: '3'},
    { id: 2, name: 'John Doe', geboortedatum: '01-01-1990', diagnosis: 'JDM', medication: 'x medicijn', appointments: '3'},
    { id: 3, name: 'John Doe', geboortedatum: '01-01-1990', diagnosis: 'JDM', medication: 'x medicijn', appointments: '3'},
    { id: 4, name: 'John Doe', geboortedatum: '01-01-1990', diagnosis: 'JDM', medication: 'x medicijn', appointments: '4'},
  ];

  return (
    <div className="patientlist-container">
      <h4 className="patient-title">Alle patienten</h4>
      <div className="patientlist-header">
        <div className="patient-label-container">
          <div>naam</div>
          <div>geboorte datum</div>
          <div>diagnose</div>
          <div>afspraken</div>
        </div>
      </div>
      {patients.map(patient => (
        <div key={patient.id} className="patient-row-wrapper">
          <div className="patient-row">
            <div className="patient-value-container">
              <div className="patient-value">{patient.name}</div>
              <div className="patient-value">{patient.geboortedatum}</div>
              <div className="patient-value">{patient.diagnosis}</div>
              <div className="patient-value">{patient.appointments}</div>
            </div>
          </div>
          <div className="extra-card">...</div>
        </div>
      ))}
    </div>
  );
};

export default PatientList;