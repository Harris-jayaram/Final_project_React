// ResponsiveAppBar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import Drawer from '@mui/material/Drawer';
import Tooltip from '@mui/material/Tooltip';
import Profile from './Profile';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const pages = ['Home', 'Appointment', 'Patient', 'About US'];

function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState('');
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (item) => {
    setAnchorElUser(null);

    if (item === 'Login') {
      navigate('/login');
    } else if (item === 'Sign Up') {
      navigate('/signup');
    }
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search submitted:', searchValue);
    // Add your search logic here
  };

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer(true)}
            color="inherit"
          >
           
            <MenuIcon />
          </IconButton>
          

          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
  <Box
    sx={{
      width: 200,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'left',
      alignItems: 'center',
      paddingTop: 2,
      backgroundColor: '#ffdab9', // Set background color
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
      borderRadius: '8px', // Add rounded corners
    }}
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
  >
    {pages.map((page) => (
      <MenuItem
        key={page}
        onClick={() => {
          navigate(`/${page.toLowerCase()}`);
        }}
        sx={{
          color: 'white', // Set text color to white
          '&:hover': {
            backgroundColor: '#34495e', // Darker color on hover
          },
        }}
      >
        <Typography
          textAlign="center"
          sx={{
            textTransform: 'capitalize',
            fontSize: '1rem', // Adjust the font size
          }}
        >
          {page}
        </Typography>
      </MenuItem>
    ))}
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
  </Box>
</Drawer>


<LocalHospitalIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '2rem', color: 'white' }} />

<Typography
  variant="h6"
  noWrap
  component={Link}
  to="/"
  sx={{
    flexShrink: 0,
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
  }}
>
  HMS
</Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(`/${page.toLowerCase()}`);
                }}
                sx={{ mx: 2, color: 'white', textTransform: 'capitalize' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={handleSearchChange}
                style={{
                  padding: '8px',
                  marginRight: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  outline: 'none',
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="small"
                startIcon={<SearchIcon />}
                sx={{ height: '36px', ml: '-16px' }}
              >
                Search
              </Button>
            </form>
          </Box>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white' }}>
                <SettingsIcon />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={() => handleCloseUserMenu()}
            >
              <MenuItem component={Link} to="/profile" onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/dashboard" onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Dashboard</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/healthtips" onClick={handleCloseUserMenu}>
                <Typography textAlign="center">HealtTips</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/contact us" onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Contact Us</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/settings" onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Settings</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/logout" onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>

            <Button component={Link} to="/login" sx={{ mx: 1, color: 'white', textTransform: 'capitalize' }}>
              Login
            </Button>
            <Button component={Link} to="/signup" sx={{ mx: 1, color: 'white', textTransform: 'capitalize' }}>
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
     
    </AppBar>
    
    
    
  );
}

export default ResponsiveAppBar;

