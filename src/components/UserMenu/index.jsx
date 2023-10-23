import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper } from './UserMenu.styled';
import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <Wrapper>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {user.name}
      </Typography>
      <Button onClick={handleClick} color="inherit">
        Log Out
      </Button>
    </Wrapper>
  );
};
