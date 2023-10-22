import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper } from './UserMenu.styled';
import { LogOut } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <b>{user.name}</b>
      <LogOut to="/" onClick={() => dispatch(logOut())}>
        Log Out
      </LogOut>
    </Wrapper>
  );
};
