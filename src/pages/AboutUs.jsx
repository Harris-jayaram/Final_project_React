// AboutUs.jsx
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
  return (
    <Container maxWidth="lg" className="Container">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom className="SectionTitle FadeInTitle">
            About HMS
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} className="Paper MissionValues">
            <Typography variant="h4" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              At Hospital Managment System, our mission is to provide exceptional healthcare services with
              a focus on compassion, expertise, and innovation. We are committed to delivering
              high-quality, patient-centered care tailored to meet the unique needs of each individual.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} className="Paper MissionValues">
            <Typography variant="h4" gutterBottom>
              Our Values
            </Typography>
            <ul className="ValueList">
              <li>- Patient-Centric: We prioritize the well-being and satisfaction of our patients.</li>
              <li>- Excellence: We strive for excellence in all aspects of healthcare delivery.</li>
              <li>- Innovation: We leverage cutting-edge technology to enhance patient care and hospital operations.</li>
            </ul>
          </Paper>
        </Grid>

        {/* Add more styled sections as needed, such as history, team, etc. */}
      </Grid>
    </Container>
  );
};

export default AboutUs;
