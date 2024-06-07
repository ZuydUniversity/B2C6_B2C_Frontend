import './componentstyles/patientlist.css';

const PatientList = () => {
  const patients = [
    { id: 1, name: 'John Doe', age: 30, diagnosis: 'JDM', medication: 'x medicijn', appointments: '3', image: 'https://via.placeholder.com/150', nextAppointment: "02-01-2024"},
    { id: 2, name: 'John Doe', age: 30, diagnosis: 'JDM', medication: 'x medicijn', appointments: '3', image: 'https://via.placeholder.com/150', nextAppointment: "02-01-2024"},
    { id: 3, name: 'John Doe', age: 30, diagnosis: 'JDM', medication: 'x medicijn', appointments: '3', image: 'https://via.placeholder.com/150', nextAppointment: "02-01-2024"},
  ];

  return (
    <div className="patientlist-container">
    
    </div>
  );
};

export default PatientList;