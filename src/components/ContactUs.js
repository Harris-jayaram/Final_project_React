import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., send data to server, display success message)
    console.log('Form submitted:', formData);
    // Clear form fields after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
     
    >
      <br>
      </br>
      <Typography variant="h4" style={{ color: '#d24040', marginBottom: '20px' }}>
        Contact Us
      </Typography>
      <Typography variant="body1" style={{ fontSize: '16px', marginBottom: '30px', color: '#555' }}>
        If you have any questions or concerns, please feel free to contact us.
      </Typography>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              InputProps={{
                startAdornment: <AccountCircleIcon style={{ color: '#d24040', marginRight: '8px', fontSize: '20px' }} />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              InputProps={{
                startAdornment: <EmailIcon style={{ color: '#d24040', marginRight: '8px', fontSize: '20px' }} />,
              }}
            />
          </Grid>
        </Grid>
<br></br>
        <TextField
          variant="outlined"
          required
          fullWidth
          multiline
          rows={4}
          id="message"
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{ marginBottom: '30px' }}
          InputProps={{
            startAdornment: <MessageIcon style={{ color: '#d24040', marginRight: '8px', fontSize: '20px' }} />,
          }}
        />

        <Button
          type="submit"
          variant="contained"
          style={{ background: '#d24040', color: '#fff', padding: '15px', borderRadius: '5px', width: '100%' }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactUs;
