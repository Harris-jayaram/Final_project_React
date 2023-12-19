import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const HealthTips = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  };

  const tipContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '20px',
  };

  const tipStyle = {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '10px',
  };

  const actionButtonsStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const actionButtonStyle = {
    margin: '0 10px',
    fontSize: '1rem',
  };

  const healthTips = [
    'Stay hydrated by drinking plenty of water every day.',
    'Include a variety of colorful fruits and vegetables in your diet.',
    'Get at least 30 minutes of moderate exercise most days of the week.',
    'Ensure you get enough quality sleep each night.',
    'Practice stress-reducing activities like meditation and deep breathing.',
  ];

  return (
    <div style={containerStyle}>
      <Typography variant="h1" style={headingStyle}>
        Welcome to Health Tips
      </Typography>

      <div style={tipContainerStyle}>
        {healthTips.map((tip, index) => (
          <Typography key={index} variant="body1" style={tipStyle}>
            {`${index + 1}. ${tip}`}
          </Typography>
        ))}
      </div>

      <div style={actionButtonsStyle}>
        <Button variant="contained" color="primary" style={actionButtonStyle}>
          Learn More
        </Button>
        <Button variant="outlined" color="primary" style={actionButtonStyle}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default HealthTips;
