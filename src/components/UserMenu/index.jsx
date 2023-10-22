import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper } from './UserMenu.styled';
import { LogOutLink } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <b>{user.name}</b>
      <LogOutLink to="/" onClick={() => dispatch(logOut())}>
        Log Out
      </LogOutLink>
    </Wrapper>
  );
};
