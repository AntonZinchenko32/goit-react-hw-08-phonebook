import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsLoading
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);

  return {
    isLoggedIn,
    user,
    isLoading
  };
};