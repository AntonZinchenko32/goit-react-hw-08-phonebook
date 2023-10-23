import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export const AuthNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate('/register')} color="inherit">
        Register
      </Button>
      <Button onClick={() => navigate('/login')} color="inherit">
        Login
      </Button>
    </div>
  );
};
