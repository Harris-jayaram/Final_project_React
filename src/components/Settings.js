import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/system';

// Styled components for hover effect
const HoverableListItem = styled('li')({
  marginBottom: 2,
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
});

const HoverableTypography = styled(Typography)({
  display: 'inline',
  marginRight: 2,
  transition: 'color 0.3s',
  '&:hover': {
    color: 'darkblue',
  },
});

const Settings = () => {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');
  const [openDialog, setOpenDialog] = useState(false);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveChanges = () => {
    // Add logic to save changes here
    handleCloseDialog();
  };

  return (
    <Box sx={{ p: 3, marginTop: '55px', maxWidth: '600px', margin: 'auto', textAlign: 'left' }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Settings
      </Typography>

      <Typography paragraph>
        Welcome to the Settings page. Personalize your experience on our website by configuring the options below.
      </Typography>

      <Typography variant="h5" sx={{ marginTop: 3 }}>
        General Settings
      </Typography>
      <ul sx={{ listStyle: 'none', padding: 0 }}>
        <HoverableListItem sx={{ marginBottom: 2 }}>
          <HoverableTypography variant="subtitle1" sx={{ display: 'inline', marginRight: 2 }}>
            Language preferences:
          </HoverableTypography>
          <Select value={language} onChange={handleLanguageChange} variant="outlined" sx={{ width: '150px' }}>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Español</MenuItem>
            <MenuItem value="fr">Français</MenuItem>
          </Select>
        </HoverableListItem>
        <HoverableListItem sx={{ marginBottom: 2 }}>
          <HoverableTypography variant="subtitle1" sx={{ display: 'inline', marginRight: 2 }}>
            Notification settings:
          </HoverableTypography>
          {/* Add your notification settings input or select field here */}
        </HoverableListItem>
      </ul>

      <Typography variant="h5" sx={{ marginTop: 3 }}>
        Account Settings
      </Typography>
      <ul sx={{ listStyle: 'none', padding: 0 }}>
        <HoverableListItem sx={{ marginBottom: 2 }}>
          <HoverableTypography variant="subtitle1" sx={{ display: 'inline', marginRight: 2 }}>
            Change password:
          </HoverableTypography>
          {/* Add your change password input or button here */}
        </HoverableListItem>
        <HoverableListItem sx={{ marginBottom: 2 }}>
          <HoverableTypography variant="subtitle1" sx={{ display: 'inline', marginRight: 2 }}>
            Email preferences:
          </HoverableTypography>
          {/* Add your email preferences input or select field here */}
        </HoverableListItem>
        <HoverableListItem sx={{ marginBottom: 2 }}>
          <HoverableTypography variant="subtitle1" sx={{ display: 'inline', marginRight: 2 }}>
            Profile customization:
          </HoverableTypography>
          {/* Add your profile customization input or button here */}
        </HoverableListItem>
      </ul>

      <Typography variant="h5" sx={{ marginTop: 3 }}>
        Privacy Settings
      </Typography>
      <ul sx={{ listStyle: 'none', padding: 0 }}>
        <HoverableListItem sx={{ marginBottom: 2 }}>
          <HoverableTypography variant="subtitle1" sx={{ display: 'inline', marginRight: 2 }}>
            Manage privacy preferences:
          </HoverableTypography>
          {/* Add your manage privacy preferences input or button here */}
        </HoverableListItem>
        <HoverableListItem sx={{ marginBottom: 2 }}>
          <HoverableTypography variant="subtitle1" sx={{ display: 'inline', marginRight: 2 }}>
            Cookies and tracking settings:
          </HoverableTypography>
          {/* Add your cookies and tracking settings input or select field here */}
        </HoverableListItem>
      </ul>

      <Box sx={{ marginTop: 3 }}>
        <Button variant="contained" color="primary" onClick={handleToggleTheme}>
          Toggle Theme
        </Button>
        <Button variant="contained" color="primary" sx={{ marginLeft: 2 }} onClick={handleOpenDialog}>
          Save Changes
        </Button>
      </Box>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Save Changes</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to save the changes?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveChanges} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Settings;
