// Components
import Layout from 'components/Layout';
import Home from 'Pages/Home';
import { Loader } from 'components/Loader';
// Redux
import { refreshUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
// React
import { useEffect } from 'react';
import { lazy } from 'react';
// Hooks
import { useAuth } from 'hooks';
// Routes
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from 'guards/PrivateRoute';
import { RestrictedRoute } from 'guards/RestrictedRoute';

const Register = lazy(() => import('Pages/Register'));
const Login = lazy(() => import('Pages/Login'));
const Contacts = lazy(() => import('Pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
