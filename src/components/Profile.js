import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const Profile = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card style={{ width: '500px', margin: '20px auto', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      {/* User Profile Content */}
      <CardContent>
        <img
          src="https://th.bing.com/th/id/R.08d049f7346550e757958c32e3aaf49e?rik=e6c8N%2beY3NBJiA&riu=http%3a%2f%2fwww.worldstopmost.com%2fwp-content%2fuploads%2f2016%2f05%2fDr.-Mikhail-Varshavski-Most-Handsome-Doctors-2018.png&ehk=ZCkPgGKTM6GelWxaFI8zY1IYye%2blbZzIuYtToCoP2Pc%3d&risl=&pid=ImgRaw&r=0"
          alt="User"
          style={{ width: '100%', maxWidth: '500px', borderRadius : '25px',margin: '0 auto' }}
        />
        <Typography variant="h5" style={{ marginTop: '10px', fontWeight: 'bold', color: '#333' }}>
          John Doe
        </Typography>
        <Typography variant="body2" style={{ marginTop: '10px', color: '#666' }}>
          UI/UX Designer
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
          <div style={{ marginRight: '20px' }}>
            <PersonIcon style={{ color: '#3498db', fontSize: '28px' }} />
            <Typography variant="body2" style={{ color: '#666', marginTop: '5px' }}>
              25 years old
            </Typography>
          </div>
          <div style={{ marginRight: '20px' }}>
            <LocationOnIcon style={{ color: '#e74c3c', fontSize: '28px' }} />
            <Typography variant="body2" style={{ color: '#666', marginTop: '5px' }}>
              New York, USA
            </Typography>
          </div>
          <div>
            <EmailIcon style={{ color: '#27ae60', fontSize: '28px' }} />
            <Typography variant="body2" style={{ color: '#666', marginTop: '5px' }}>
              john.doe@example.com
            </Typography>
          </div>
        </div>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', padding: '0 15px 15px' }}>
        {/* Toggle Favorite Button */}
        <button onClick={handleToggleFavorite} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
          {isFavorite ? <FavoriteIcon style={{ color: '#e74c3c', fontSize: '28px' }} /> : <FavoriteBorderIcon style={{ fontSize: '28px' }} />}
        </button>

        {/* Share Button */}
        <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
          <ShareIcon style={{ fontSize: '28px' }} />
        </button>
      </CardActions>
    </Card>
  );
};

export default Profile;
