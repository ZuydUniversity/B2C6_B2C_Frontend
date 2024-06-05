import './componentstyles/patientlist.css';

const PatientList = () => {
  const patients = [
    { id: 1, name: 'John Doe', age: 30, diagnosis: 'JDM', medication: 'x medicijn', appointments: '3', image: 'https://via.placeholder.com/150', nextAppointment: "02-01-2024"},
    { id: 2, name: 'John Doe', age: 30, diagnosis: 'JDM', medication: 'x medicijn', appointments: '3', image: 'https://via.placeholder.com/150', nextAppointment: "02-01-2024"},
    { id: 3, name: 'John Doe', age: 30, diagnosis: 'JDM', medication: 'x medicijn', appointments: '3', image: 'https://via.placeholder.com/150', nextAppointment: "02-01-2024"},
  ];

  return (
    <div className="patientlist-container">
      <h2 className="patientlist-title">Patienten met een afspraak</h2>
      {patients.map((patient) => (
        <div className="patient-row-wrapper">
            <div className="appointment-card">
                <span>Gepland</span>
                <span>{patient.nextAppointment}</span>
            </div>
            <div className="patient-row-container">
            <img src={patient.image} alt={patient.name} className="patient-image" />
                <ul key={patient.id} className="patient-row">
                    <div className='patientinfo-pair'>
                    <span className="patient-label">Naam</span>
                    <span className="patient-name">{patient.name}</span>
                    </div>
                    <div className='patientinfo-pair'>
                    <span className="patient-label">Leeftijd</span>
                    <span className="patient-age">{patient.age} jaar</span>
                    </div>
                    <div className='patientinfo-pair'>
                    <span className="patient-label">Diagnose</span>
                    <span className="patient-diagnosis">{patient.diagnosis}</span>
                    </div>
                    <div className='patientinfo-pair'>
                    <span className="patient-label">Medicatie</span>
                    <span className="patient-medication">{patient.medication}</span>
                    </div>
                    <div className='patientinfo-pair'>
                    <span className="patient-label">Afspraken</span>
                    <span className="patient-appointments">{patient.appointments}</span>
                    </div>
                </ul>
            </div>
            <div className="options-card">
                <span>...</span>
            </div>
        </div>
      ))}
    </div>
  );
};

export default PatientList;