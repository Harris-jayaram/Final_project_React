import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/system';

const HoverPaper = styled(Paper)({
  padding: '20px',
  textAlign: 'center',
  borderRadius: '10px',
  background: '#ffffff',
  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const HoverButton = styled(Button)({
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#ffb6c1',
  },
});

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '80%',
  maxHeight: '100%',
  borderRadius: '8px', // Add border radius
});

const GridItem = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

const GridImage = styled('img')({
  width: '80%',
  borderRadius: '8px',
  marginBottom: '10px',
});

class Home extends React.Component {
  state = {
    welcomeMessage: ` 
    At HealthHub, we blend compassion, expertise, and innovation to provide 
    unparalleled healthcare. Our cutting-edge technology and experienced professionals create a healing environment focused on your well-being. Your health is our priority at HealthHub - where care meets excellence. Explore the possibilities
     with us, as we strive to make your journey to wellness a seamless and satisfying experience.
    `,
    sliderSettings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Add autoplay
      autoplaySpeed: 1000, // Set autoplay speed (milliseconds)
    },
    sliderImages: [
      'https://wallpapercave.com/dwp1x/wp2968489.jpg',
      'https://wallpapercave.com/dwp1x/wp2216034.jpg',
      'https://wallpapercave.com/dwp1x/wp2968506.jpg',
      'https://wallpapercave.com/dwp1x/wp2789220.jpg',
      'https://wallpapercave.com/dwp1x/wp2968524.jpg',
      'https://wallpapercave.com/dwp1x/wp2968627.jpg',
      // Add more image URLs as needed
    ],
  };

  render() {
    const { welcomeMessage, sliderSettings, sliderImages } = this.state;

    return (
      <Container maxWidth="xl" style={{ marginTop: '20px', backgroundColor: '#f9f9f9' }}>
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={6} style={{ marginBottom: '20px' }}>
            <HoverPaper elevation={3}>
              <Typography variant="h3" gutterBottom style={{ color: '#2773ad' }}>
                Welcome to Our Hospital Management System
              </Typography>
              <Typography variant="body1" paragraph style={{ color: '#666' }}>
                {welcomeMessage}
              </Typography>
              <HoverButton
                variant="contained"
                color="primary"
                component={Link}
                to="/appointment"
              >
                Book Your Appointment Today
              </HoverButton>
            </HoverPaper>
          </Grid>

          {/* Right Column with Slider */}
          <Grid item xs={12} md={6} style={{ marginBottom: '20px' }}>
            <Slider {...sliderSettings}>
              {sliderImages.map((image, index) => (
                <div key={index}>
                  <Img
                    src={image}
                    alt={`Slider Image ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          </Grid>
        </Grid>

        {/* Additional Section */}

        {/* Additional Content Section */}
        <Grid item xs={12}>
          <HoverPaper elevation={3}>
            <Typography variant="h4" gutterBottom style={{ color: '#  2773ad' }}>
              Our Commitment to Quality Care
            </Typography>
            <Typography variant="body1" paragraph style={{ color: '#666' }}>
              
At HealthPulse, we are devoted to delivering outstanding healthcare services. 
Our team of committed professionals tirelessly works to guarantee personalized and high-quality care for every patient. 
Your well-being is our top priority, and we are dedicated to fostering a healing environment that supports both physical and emotional recovery.






            </Typography>
            <HoverButton
              variant="contained"
              color="primary"
              component={Link}
              to="/about us"
            >
              Learn More About Us
            </HoverButton>
          </HoverPaper>
        </Grid>

        {/* Additional Text Section */}
        <center>
          <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333', textAlign: 'justify' }}>
            <center>
              <h1>
            CheckOut Our Famous Doctors
            </h1>
            </center>
          </p>
        </center>

        {/* Four Grid Section */}
        <Grid container spacing={4} style={{ marginTop: '40px', justifyContent: 'center' }}>
          <GridItem item xs={6} sm={3}>
            <GridImage src="https://wallpaperaccess.com/full/1189426.jpg" alt="Image 1" />
            <Typography variant="h6">Ravi</Typography>
            <Typography variant="body2">Heart Specialist</Typography>
          </GridItem>
          <GridItem item xs={6} sm={3}>
            <GridImage src="https://wallpaperaccess.com/full/1189426.jpg" alt="Image 2" />
            <Typography variant="h6">Bhagavat</Typography>
            <Typography variant="body2">Eye Specialist</Typography>
          </GridItem>
          <GridItem item xs={6} sm={3}>
            <GridImage src="https://wallpaperaccess.com/full/1189426.jpg" alt="Image 3" />
            <Typography variant="h6">Nanci</Typography>
            <Typography variant="body2">Cardiologist</Typography>
          </GridItem>
          <GridItem item xs={6} sm={3}>
            <GridImage src="https://wallpaperaccess.com/full/1189426.jpg" alt="Image 4" />
            <Typography variant="h6">Venkat</Typography>
            <Typography variant="body2">Dentist</Typography>
          </GridItem>
        </Grid>

        {/* Blog Card Section */}
        <Grid container spacing={4} style={{ marginTop: '40px', justifyContent: 'center' }}>
          <Grid item xs={12} md={6} style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
          </Grid>
        </Grid>

        {/* Footer Section */}
        <Grid container spacing={4} style={{ marginTop: '40px', justifyContent: 'center' }}>
          <Grid item xs={12}>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom style={{ color: '#333' }}>
                Connect with Us
              </Typography>
              {/* Add your social media icons and links here */}
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon fontSize="large" style={{ color: '#E4405F', margin: '0 10px' }} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FacebookIcon fontSize="large" style={{ color: '#1877F2', margin: '0 10px' }} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize="large" style={{ color: '#333', margin: '0 10px' }} />
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Home;
