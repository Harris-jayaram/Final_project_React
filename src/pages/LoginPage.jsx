import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation
    if (!email || !password) {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate login success
    const welcomeMsg = `Welcome, ${email}!`;
    setWelcomeMessage(welcomeMsg);
    setLoggedIn(true);

    // Show success toast
    toast.success('Login successful!');

    // Log form data
    console.log({
      email,
      password,
      rememberMe,
    });
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setWelcomeMessage('');
    // Add any additional logout logic here
  };

  const handleChange = (event) => {
    // Handle input changes
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isLoggedIn ? 'Welcome back!' : 'Sign in'}
          </Typography>
          {isLoggedIn && (
            <Button onClick={handleLogout} variant="outlined" sx={{ mt: 2 }}>
              Logout
            </Button>
          )}
          {!isLoggedIn && (
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="rememberMe" color="primary" />}
                label="Remember me"
                name="rememberMe"
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link component={RouterLink} to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          )}
          {welcomeMessage && (
            <Typography variant="h6" color="text.secondary" align="center" sx={{ mt: 2 }}>
              {welcomeMessage}
            </Typography>
          )}
        </Box>
        {/* Toast container for displaying notifications */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
