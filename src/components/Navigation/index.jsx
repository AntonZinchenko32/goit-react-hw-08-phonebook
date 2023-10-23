import { useAuth } from 'hooks';

import { useNavigate } from 'react-router-dom';

import { Nav } from './Navigation.styled';

// MUI
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <Nav>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => navigate('/')}
      >
        <HomeIcon />
      </IconButton>
      {isLoggedIn && (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button onClick={() => navigate('/contacts')} color="inherit">
            Contacts
          </Button>
        </Typography>
      )}
    </Nav>
  );
};
