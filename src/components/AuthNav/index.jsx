import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { AuthNavBox } from './AuthNav.styled';

export const AuthNav = () => {
  const navigate = useNavigate();
  return (
    <AuthNavBox>
      <Button onClick={() => navigate('/register')} color="inherit">
        Register
      </Button>
      <Button onClick={() => navigate('/login')} color="inherit">
        Login
      </Button>
    </AuthNavBox>
  );
};
