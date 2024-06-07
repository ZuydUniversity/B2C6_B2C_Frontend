import * as React from 'react';
import './styles/dashboardcss.css';

interface PatientCardProps {
  date: string;
  name: string;
  age: string;
  diagnosis: string;
  medication: string;
  appointments: number;
  imageUrl: string;
}

const PatientCard: React.FC<PatientCardProps> = ({
  date,
  name,
  age,
  diagnosis,
  medication,
  appointments,
  imageUrl,
}) => {
  return (
<article className="patientCard">
  <div className="patientCardTime">
    <p>Gepland</p>
    <time dateTime={date.split('/').reverse().join('-')}>{date}</time>
  </div>
  <div className="patientCardMain">
    <div className="patientCardImageWrapper">
      <img
        loading="lazy"
        src={imageUrl}
        alt={`${name} profile`}
        className="patientCardImage"
      />
    </div>
    <div className="patientCardDetails">
      <div className="patientCardRow">
        <h4 className="patientCardName">Naam:</h4>
        <p>{name}</p>
      </div>
      <div className="patientCardRow">
        <h4 className="patientCardAge">Leeftijd:</h4>
        <p>{age}</p>
      </div>
      <div className="patientCardRow">
        <h4 className="patientCardDiagnosis">Diagnose:</h4>
        <p className="patientCardDiagnosisText">
          <span>{diagnosis.split(' ')[0]} </span>
          {diagnosis.split(' ').slice(1).join(' ')}
        </p>
      </div>
      <div className="patientCardRow">
        <h4 className="patientCardMedication">Medicatie:</h4>
        <p>{medication}</p>
      </div>
      <div className="patientCardRow">
        <h4 className="patientCardAppointments">Afspraken:</h4>
        <p className="patientCardAppointmentsCount">{appointments}</p>
      </div>
    </div>
  </div>
  <div className="patientCardOptions">
        <button className="patientCardOptions button">
          <h3>...</h3>
        </button>
  </div>
</article>

  );
};

const Dashboard: React.FC = () => {
  const patients = [
    {
      date: '02/06/2021',
      name: 'Joep Doe',
      age: '10 jaar',
      diagnosis: 'JDM (monocyclische)',
      medication: 'x medicijn',
      appointments: 4,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9cbc49fe5e5cad6f542ab1afdfa1a584a22b1d760a502af4d81ca29d57f2d10c?apiKey=070967f8f2f74db686d34af20d021ec7&',
    },
    {
      date: '02/06/2021',
      name: 'Joep Doe',
      age: '10 jaar',
      diagnosis: 'JDM (monocyclische)',
      medication: 'x medicijn',
      appointments: 4,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9cbc49fe5e5cad6f542ab1afdfa1a584a22b1d760a502af4d81ca29d57f2d10c?apiKey=070967f8f2f74db686d34af20d021ec7&',
    },
    {
      date: '02/06/2021',
      name: 'Joep Doe',
      age: '10 jaar',
      diagnosis: 'JDM (monocyclische)',
      medication: 'x medicijn',
      appointments: 4,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9cbc49fe5e5cad6f542ab1afdfa1a584a22b1d760a502af4d81ca29d57f2d10c?apiKey=070967f8f2f74db686d34af20d021ec7&',
    },
    {
      date: '02/06/2021',
      name: 'Joep Doe',
      age: '10 jaar',
      diagnosis: 'JDM (monocyclische)',
      medication: 'x medicijn',
      appointments: 4,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9cbc49fe5e5cad6f542ab1afdfa1a584a22b1d760a502af4d81ca29d57f2d10c?apiKey=070967f8f2f74db686d34af20d021ec7&',
    },
    {
      date: '02/06/2021',
      name: 'Joep Doe',
      age: '10 jaar',
      diagnosis: 'JDM (monocyclische)',
      medication: 'x medicijn',
      appointments: 4,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9cbc49fe5e5cad6f542ab1afdfa1a584a22b1d760a502af4d81ca29d57f2d10c?apiKey=070967f8f2f74db686d34af20d021ec7&',
    },
    {
      date: '02/06/2021',
      name: 'Joep Doe',
      age: '10 jaar',
      diagnosis: 'JDM (monocyclische)',
      medication: 'x medicijn',
      appointments: 4,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9cbc49fe5e5cad6f542ab1afdfa1a584a22b1d760a502af4d81ca29d57f2d10c?apiKey=070967f8f2f74db686d34af20d021ec7&',
    },
    {
      date: '02/06/2021',
      name: 'Joep Doe',
      age: '10 jaar',
      diagnosis: 'JDM (monocyclische)',
      medication: 'x medicijn',
      appointments: 4,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9cbc49fe5e5cad6f542ab1afdfa1a584a22b1d760a502af4d81ca29d57f2d10c?apiKey=070967f8f2f74db686d34af20d021ec7&',
    },
    {
      date: '02/06/2021',
      name: 'Joep Doe',
      age: '10 jaar',
      diagnosis: 'JDM (monocyclische)',
      medication: 'x medicijn',
      appointments: 4,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9cbc49fe5e5cad6f542ab1afdfa1a584a22b1d760a502af4d81ca29d57f2d10c?apiKey=070967f8f2f74db686d34af20d021ec7&',
    },
    {
      date: '02/06/2021',
      name: 'Joep Doe',
      age: '10 jaar',
      diagnosis: 'JDM (monocyclische)',
      medication: 'x medicijn',
      appointments: 4,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9cbc49fe5e5cad6f542ab1afdfa1a584a22b1d760a502af4d81ca29d57f2d10c?apiKey=070967f8f2f74db686d34af20d021ec7&',
    },
    {
      date: '02/06/2021',
      name: 'Joep Doe',
      age: '10 jaar',
      diagnosis: 'JDM (monocyclische)',
      medication: 'x medicijn',
      appointments: 4,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9cbc49fe5e5cad6f542ab1afdfa1a584a22b1d760a502af4d81ca29d57f2d10c?apiKey=070967f8f2f74db686d34af20d021ec7&',
    },
    {
      date: '02/06/2021',
      name: 'Joep Doe',
      age: '10 jaar',
      diagnosis: 'JDM (monocyclische)',
      medication: 'x medicijn',
      appointments: 4,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9cbc49fe5e5cad6f542ab1afdfa1a584a22b1d760a502af4d81ca29d57f2d10c?apiKey=070967f8f2f74db686d34af20d021ec7&',
    },
  ];

  return (
    <main className="dashboardMain">
      <div className="dashboardSection">
        <article className="dashboardArticle">
          <h1 className="dashboardHeader test">
            
            Hallo, Dr. Johannes Doe
            <hr />
          </h1>
          <hr className="dashboardHeader" />
          <section className="dashboardContent">
            
            <article className="dashboardInnerContent">
              <header className="dashboardInnerHeader">
                <section>
                  <h2>Patiënten met een afspraak</h2>
                  <hr />
                </section>
                <section className="dashboardSort">
                  <div>
                    <span>oplopend </span>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8680dffe1c994dd27e1c422f85ae2b00662d600ce944f33420b92f4cf8c535d?apiKey=070967f8f2f74db686d34af20d021ec7&"
                      alt=""
                    />
                  </div>
                </section>
              </header>
              {patients.map((patient, index) => (
                <PatientCard
                  key={index}
                  date={patient.date}
                  name={patient.name}
                  age={patient.age}
                  diagnosis={patient.diagnosis}
                  medication={patient.medication}
                  appointments={patient.appointments}
                  imageUrl={patient.imageUrl}
                />
              ))}
              <footer className="dashboardFooter"></footer>
            </article>
          </section>
        </article>
        <footer className="dashboardFooter"></footer>
      </div>
      <aside className="dashboardAside">
        <section></section>
      </aside>
    </main>
  );
};

export default Dashboard;
