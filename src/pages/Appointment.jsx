import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUser, faVenusMars, faPhone, faCalendar, faMapMarkerAlt, faEnvelope, faListUl } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

// Styled Components
const FormContainer = styled.div`
  text-align: center;
  max-width: 600px;
  margin: auto;
  padding: 30px;
  border: 2px solid #3498db;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  color: #3498db;
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  flex: 1;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-top: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  &:hover {
    border-color: #3498db;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-top: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  &:hover {
    border-color: #3498db;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-top: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  &:hover {
    border-color: #3498db;
  }
`;

const SubmitButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }
`;

const ErrorMessages = styled.div`
  color: red;
`;
const ConfirmationModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
  max-width: 400px;
  width: 100%;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
`;

export {
  FormContainer,
  Heading,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  SubmitButton,
  ErrorMessages,
  ConfirmationModal,
  CloseButton,
  ModalContent,
};


const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'Male',
    phone: '',
    dob: '',
    address: {
      doorNumber: '',
      street: '',
      city: '',
      district: '',
      pincode: '',
      state: '',
    },
    email: '',
    previouslyAttended: false,
    previousCondition: '',
    appointmentTypes: {
      cervixCheckup: false,
      heartCheckup: false,
      eyeCheckup: false,
      hearingCheckup: false,
    },
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? { ...prevData[name], [value]: checked } : value,
    }));

    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }

    if (!formData.dob.trim()) {
      errors.dob = 'Date of birth is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      console.log('Form data submitted:', formData);
    } else {
      alert('Please fill out all required fields correctly');
    }
  };

  const handleCloseModal = () => {
    setIsSubmitted(false);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Heading>Doctor Appointment Form</Heading>

        <FormGroup>
          <Label>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
            Name*:
          </Label>
          <div style={{ display: 'flex', gap: '5px' }}>
            <Input
              type="text"
              name="firstName"
              placeholder="Firstname"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Lastname"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </FormGroup>

        <FormGroup>
          <Label>
            <FontAwesomeIcon icon={faVenusMars} style={{ marginRight: '5px' }} />
            Gender*:
          </Label>
          <Select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
            Phone:
          </Label>
          <Input
            type="number"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>
            <FontAwesomeIcon icon={faCalendar} style={{ marginRight: '5px' }} />
            Date of Birth*:
          </Label>
          <Input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '5px' }} />
            Address:
          </Label>
          <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
            <Input
              type="text"
              name="doorNumber"
              placeholder="Door Number"
              value={formData.address.doorNumber}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="street"
              placeholder="Street"
              value={formData.address.street}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="city"
              placeholder="City"
              value={formData.address.city}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="district"
              placeholder="District"
              value={formData.address.district}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.address.pincode}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="state"
              placeholder="State"
              value={formData.address.state}
              onChange={handleChange}
            />
            <small style={{ alignSelf: 'flex-end', marginTop: '5px' }}>
              (Separate each field with commas)
            </small>
          </div>
        </FormGroup>

        <FormGroup>
          <Label>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
            Email:
          </Label>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>
            <FontAwesomeIcon icon={faListUl} style={{ marginRight: '5px' }} />
            Have you previously attended our hospital?*
          </Label>
          <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
            <label>
              <input
                type="radio"
                name="previouslyAttended"
                value="Yes"
                checked={formData.previouslyAttended === 'Yes'}
                onChange={handleChange}
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="previouslyAttended"
                value="No"
                checked={formData.previouslyAttended === 'No'}
                onChange={handleChange}
              />
              <span>No</span>
            </label>
          </div>
        </FormGroup>

        {formData.previouslyAttended === 'Yes' && (
          <FormGroup>
            <Label>
              If yes, state on which condition and when?
            </Label>
            <Input
              type="text"
              name="previousCondition"
              value={formData.previousCondition}
              onChange={handleChange}
            />
          </FormGroup>
        )}

        <div style={{ fontSize: '20px', marginBottom: '10px' }}>Appointment Type:</div>
        <p>Select which appointment type you require</p>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          <input
            type="checkbox"
            name="cervixCheckup"
            checked={formData.appointmentTypes.cervixCheckup}
            onChange={handleChange}
          />
          Cervix checkup
        </label>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          <input
            type="checkbox"
            name="heartCheckup"
            checked={formData.appointmentTypes.heartCheckup}
            onChange={handleChange}
          />
          Heart checkup
        </label>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          <input
            type="checkbox"
            name="eyeCheckup"
            checked={formData.appointmentTypes.eyeCheckup}
            onChange={handleChange}
          />
          Eye checkup
        </label>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          <input
            type="checkbox"
            name="hearingCheckup"
            checked={formData.appointmentTypes.hearingCheckup}
            onChange={handleChange}
          />
          Hearing checkup
        </label>
        <br />

        <SubmitButton type="submit">
          <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px' }} /> Send
        </SubmitButton>

        {/* Form validation errors */}
        <ErrorMessages>
          {Object.values(formErrors).map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </ErrorMessages>
      </form>
      {isSubmitted && (
        <ConfirmationModal>
          <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
          <ModalContent>
            <p>Your appointment is booked with the following details:</p>
            <ul>
              <li>Name: {formData.firstName} {formData.lastName}</li>
              <li>Email: {formData.email}</li>
              <li>Phone: {formData.phone}</li>
              {/* Add more details as needed */}
            </ul>
            <p>Your appointment details will be provided upon confirmation.</p>
          </ModalContent>
        </ConfirmationModal>
      )}
    </FormContainer>
  );
};

export default Appointment;
