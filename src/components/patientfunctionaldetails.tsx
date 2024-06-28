import React from 'react';
import "./componentstyles/patientfunctionaldetails.css"; // Import the CSS file for styling.

const PatientFunctionalDetails: React.FC = () => {
    return (
        <div className="dashboard">
            <div className="header">
                <h1>Vandaag, 24 Juni</h1>
                <select>
                    <option>April 2021</option>
                    <option>Mei 2021</option>
                    <option>Juni 2021</option>
                </select>
            </div>

            <div className="content">
                <div className="left-column">
                    <div className="functional-data">
                        <h2>Functionele gegevens</h2>
                        <div className="myometric-results">
                            <h3>Myometrie Resultaten</h3>
                            <div className="results">
                                <div className="result">Linkerarm<br />28/50</div>
                                <div className="result">Linkerarm<br />28/50</div>
                                <div className="result">Linkerarm<br />28/50</div>
                                <div className="result">Linkerarm<br />28/50</div>
                                <div className="result">Linkerarm<br />28/50</div>
                                <div className="result">Linkerarm<br />28/50</div>
                            </div>
                        </div>

                        <div className="cmas-result">
                            <h3>CMAS resultaat</h3>
                            <div className="cmas-score">CMAS mei<br />32/50</div>
                        </div>
                    </div>

                    <div className="medical-data">
                        <h2>Medische gegevens</h2>
                        <div className="ck-values">
                            <div className="ck-row">
                                <div className="ck-value">
                                    <span className="ck-left">CK</span>
                                    <span className="ck-right">0-145 U/L</span>
                                </div>
                                <div className="ck-number">
                                    <span>100</span>
                                </div>
                            </div>
                            <div className="ck-row">
                                <div className="ck-value">
                                    <span className="ck-left">CK</span>
                                    <span className="ck-right">0-145 U/L</span>
                                </div>
                                <div className="ck-number">
                                    <span>100</span>
                                </div>
                            </div>
                            <div className="ck-row">
                                <div className="ck-value">
                                    <span className="ck-left">CK</span>
                                    <span className="ck-right">0-145 U/L</span>
                                </div>
                                <div className="ck-number">
                                    <span>100</span>
                                </div>
                            </div>
                            <div className="ck-row">
                                <div className="ck-value">
                                    <span className="ck-left">CK</span>
                                    <span className="ck-right">0-145 U/L</span>
                                </div>
                                <div className="ck-number">
                                    <span>100</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-calendar">
                        <h2>Hero Kalender</h2>
                        <div className="calendar-icons">
                            <span>📅</span>
                            <span>📅</span>
                            <span>📅</span>
                        </div>
                        <textarea placeholder="Opmerking"></textarea>
                    </div>
                </div>

                <div className="right-column">
                    <div className="charts">
                        <h2>Grafieken</h2>
                        <div className="chart">
                            <h3>Score Vergelijking</h3>
                            <img src="chart1.png" alt="Score vergelijking grafiek" />
                        </div>
                        <div className="chart">
                            <h3>CMAS mei</h3>
                            <img src="chart2.png" alt="CMAS mei grafiek" />
                        </div>
                        <div className="chart">
                            <h3>Laboratoriumwaarden</h3>
                            <img src="chart3.png" alt="Laboratoriumwaarden grafiek" />
                        </div>
                        <div className="chart">
                            <h3>Emotiescore</h3>
                            <img src="chart4.png" alt="Emotiescore grafiek" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientFunctionalDetails;