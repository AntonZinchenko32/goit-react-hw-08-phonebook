import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isLoading } = useAuth();
  const shouldRedirect = !isLoggedIn && !isLoading;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
