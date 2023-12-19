// components/PatientManagement/PatientList.js
import React from 'react';
import './style.css';
const PatientList = ({ patients, onDelete, onViewDetails }) => {
  return (
    <div className="patient-list">
      <h2>Patient List</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id} className="patient-item">
            <div>
              <strong>{patient.name}</strong> - Age: {patient.age}, Gender: {patient.gender}
            </div>
            <div className="patient-actions">
              <button onClick={() => onViewDetails(patient)}>View Details</button>
              <button onClick={() => onDelete(patient.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
