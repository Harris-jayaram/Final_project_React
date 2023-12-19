// components/PatientManagement/PatientForm.js
import React, { useState } from 'react';
import './style.css';
const PatientForm = ({ addPatient }) => {
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    gender: 'male', // Default to male
  });

  const handleChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleAddPatient = () => {
    if (patientData.name.trim() !== '' && patientData.age !== '') {
      addPatient({
        id: Date.now(),
        name: patientData.name,
        age: patientData.age,
        gender: patientData.gender,
      });
      setPatientData({
        name: '',
        age: '',
        gender: 'male',
      });
    }
  };

  return (
    <div className="patient-form">
      <h2>Add Patient</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={patientData.name}
          onChange={handleChange}
          placeholder="Enter patient name"
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
        />
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={patientData.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button onClick={handleAddPatient}>Add Patient</button>
    </div>
  );
};

export default PatientForm;
