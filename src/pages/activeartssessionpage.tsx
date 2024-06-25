import * as React from "react";
import "./styles/activeartssession.css";

type PatientInfoProps = {
    name: string;
    age: string;
    diagnosis: string;
    medication: string;
    appointmentsCount: number;
  };
  
  const PatientInfo: React.FC<PatientInfoProps> = ({ name, age, diagnosis, medication, appointmentsCount }) => (
    <div className="patient-session-info">
      <img className="patient-session-info-background" src="https://cdn.builder.io/api/v1/image/assets/TEMP/13d0d541a6beb1a30214553122df731e5fdeb6aa403f21a1f83098c86c22ee49?apiKey=625a4e4417524f8294fdf8a1fc2d2593&" alt="" />
      <div className="patient-session-name-container">
        <div className="patient-session-info-label">Naam</div>
        <div className="patient-session-info-value">{name}</div>
      </div>
      <div className="patient-session-details-grid">
        <div className="patient-session-detail-item">
          <div className="patient-session-info-label">Leeftijd</div>
          <div className="patient-session-info-value">{age}</div>
        </div>
        <div className="diagnosis-container">
          <div className="patient-session-info-label">Diagnose</div>
          <div className="diagnosis-value">
            <span style={{ fontSize: '' }}>{diagnosis}</span>
          </div>
        </div>
        <div className="patient-session-detail-item">
          <div className="patient-session-info-label">Medicatie</div>
          <div className="patient-session-info-value">{medication}</div>
        </div>
        <div className="appointments-count">
          <div className="patient-session-info-label">Afspraken</div>
          <div className="appointments-count-value">{appointmentsCount}</div>
        </div>
      </div>
    </div>
  );
  
  type BloodChemistryItemProps = {
    name: string;
    range: string;
    value: string;
  };
  
  const BloodChemistryItem: React.FC<BloodChemistryItemProps> = ({ name, range, value }) => (
    <div className="blood-chemistry-item">
      <div className="blood-chemistry-label">
        <div className="blood-chemistry-name">{name}</div>
        <div className="blood-chemistry-range">{range}</div>
      </div>
      <div className="blood-chemistry-value">{value}</div>
    </div>
  );
  
  const ActiveArtsSession: React.FC = () => {
    const bloodChemistryData = [
      { name: 'CK', range: '0 -145 U/L', value: '100' },
      { name: 'CK', range: '0 -145 U/L', value: '100' },
      { name: 'CK', range: '0 -145 U/L', value: '100' },
      { name: 'CK', range: '0 -145 U/L', value: '100' },
      { name: 'CK', range: '0 -145 U/L', value: '100' },
      { name: 'CK', range: '0 -145 U/L', value: '100' },
    ];
  
    return (
      <>
        <main className="main-container">
          <h1 className="page-title">Sessie toevoegen</h1>
          <section className="patient-session-info-container">
            <h2 className="section-title">Patiëntgegevens</h2>
            <div className="section-divider" />
            <div className="patient-session-card">
              <div className="appointment-info">
                <div className="appointment-label">Gepland</div>
                <div className="appointment-date">02/06/2021</div>
              </div>
              <div className="patient-session-details">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f91112687be1ee8808c57b1188ab71e8e192855444387e44214872f13576251?apiKey=625a4e4417524f8294fdf8a1fc2d2593&" className="patient-session-image" alt="Patient" />
                <PatientInfo
                  name="Joep Doe"
                  age="10 jaar"
                  diagnosis="JDM (monocyclische)"
                  medication="x medicijn"
                  appointmentsCount={4}
                />
              </div>
              <input type="Button" className="patient-session-card-options-button" value="..."></input>
            </div>
          </section>
          <section className="results-container">
            <h2 className="section-title">Resultaten scan</h2>
            <div className="section-divider" />
            <div className="results-content">
              <div className="results-inner">
                <div className="radiology-results">
                  <div className="radiology-header">
                    <div className="radiology-column">
                      <div className="radiology-content">
                        <h3 className="section-title">Radiologie uitslagen</h3>
                        <div className="section-divider" />
                        <div className="radiology-labels">
                          <div className="radiology-label">aspect</div>
                          <div className="radiology-label">type</div>
                        </div>
                      </div>
                    </div>
                    <div className="assessment-column">
                      <div className="assessment-label">beoordeling</div>
                    </div>
                  </div>
                </div>
                <div className="radiology-item">
                  <div className="radiology-item-content">
                    <div className="radiology-item-details">
                      <div className="radiology-item-side">Links</div>
                      <div className="radiology-item-type">Schouder</div>
                    </div>
                    <div className="radiology-item-input">Type iets ...</div>
                  </div>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff90ff6c-bac0-4b39-80b1-998e24fc5574?apiKey=625a4e4417524f8294fdf8a1fc2d2593&" className="radiology-item-icon" alt="Radiology Icon" />
                </div>
                <h3 className="blood-chemistry">Bloedchemie</h3>
                <div className="section-divider" />
                {[0, 1, 2].map((rowIndex) => (
                  <div key={rowIndex} className="blood-chemistry-row">
                    {bloodChemistryData.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, index) => (
                      <BloodChemistryItem key={index} {...item} />
                    ))}
                  </div>
                ))}
                <div className="action-buttons">
                  <button className="cancel-button">
                    <div className="cancel-button-content">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2dc604e65ab539492f855f364252b60dc51e1562d6fc1b5fea112e2dd826ee4?apiKey=625a4e4417524f8294fdf8a1fc2d2593&" className="cancel-button-bg" alt="" />
                      <span className="cancel-button-text">annuleer</span>
                    </div>
                  </button>
                  <button className="add-session-button">
                    <div className="add-session-button-content">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0091900eabc6567aa8fe1fc63bde8d3b105d56584d871f681fb36eef0cc1202c?apiKey=625a4e4417524f8294fdf8a1fc2d2593&" className="add-session-button-bg" alt="" />
                      <span className="add-session-button-text">sessie toevoegen</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  };
  
  export default ActiveArtsSession;
