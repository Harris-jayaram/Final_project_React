// components/PatientManagement/PatientManagement.js
import React, { useState } from 'react';
import './style.css';

const PatientManagement = () => {
  const [patients, setPatients] = useState([]);
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    gender: 'male',
    address: '',
    contactNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleAddPatient = () => {
    if (
      patientData.name.trim() !== '' &&
      patientData.age !== '' &&
      patientData.address.trim() !== '' &&
      patientData.contactNumber.trim() !== '' &&
      patientData.email.trim() !== ''
    ) {
      setPatients((prevPatients) => [
        ...prevPatients,
        {
          id: Date.now(),
          ...patientData,
        },
      ]);
      setPatientData({
        name: '',
        age: '',
        gender: 'male',
        address: '',
        contactNumber: '',
        email: '',
      });
    }
  };

  const handleDeletePatient = (id) => {
    setPatients((prevPatients) => prevPatients.filter((patient) => patient.id !== id));
  };

  const handleViewDetails = (patient) => {
    // Handle view details logic
    console.log('View details for:', patient);
  };
  <br></br>

  return (
    <div className="patient-management">
      <div className="patient-form" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2>Add Patient</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={patientData.name}
            onChange={handleChange}
            placeholder="Enter patient name"
            className="form-input"
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={patientData.age}
            onChange={handleChange}
            placeholder="Enter patient age"
            className="form-input"
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={patientData.gender}
            onChange={handleChange}
            className="form-input"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={patientData.address}
            onChange={handleChange}
            placeholder="Enter patient address"
            className="form-input"
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="tel"
            name="contactNumber"
            value={patientData.contactNumber}
            onChange={handleChange}
            placeholder="Enter contact number"
            className="form-input"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={patientData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="form-input"
          />
        </div>
        <button onClick={handleAddPatient} className="form-button">
          Add Patient
        </button>
      </div>

      <div className="patient-list">
        <h2>Patient List</h2>
        <ul>
          {patients.map((patient) => (
            <li key={patient.id} className="patient-item">
              <div>
                <strong>{patient.name}</strong> - Age: {patient.age}, Gender: {patient.gender}, Email : {patient.email}
              </div>
              <div className="patient-actions">
                <button onClick={() => handleViewDetails(patient)} className="action-button">
                  View Details
                </button>
                <button onClick={() => handleDeletePatient(patient.id)} className="action-button">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientManagement;
