import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Logout = () => {
  // Simulate a logout effect
  useEffect(() => {
    const logoutTimer = setTimeout(() => {
      // Simulate clearing session or any other logout logic
      // You can replace this with actual logout logic
      console.log('User logged out');
      // Remove the redirect if you don't want to navigate
    }, 3000); // Auto-redirect after 3 seconds (adjust as needed)

    return () => clearTimeout(logoutTimer);
  }, []);

  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  };

  const messageStyle = {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px',
  };

  const iconStyle = {
    fontSize: '3rem',
    color: '#1976D2',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <ExitToAppIcon style={iconStyle} />
      <Typography variant="h1" style={headingStyle}>
        Logout
      </Typography>
      <Typography variant="body1" style={messageStyle}>
        You have been successfully logged out.
      </Typography>
      {/* If you want to add a login link, you can add it here */}
      {/* <Button variant="contained" color="primary" onClick={() => handleLoginClick()}>
        Return to Login
      </Button> */}
    </div>
  );
};

export default Logout;
