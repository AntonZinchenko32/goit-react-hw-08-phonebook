// Components
import Layout from 'components/Layout';
import Home from 'Pages/Home';
// import ContactList from '../ContactList';
// import { Loader } from 'components/Loader';
// Redux
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
// import { selectError, selectIsLoading } from 'redux/selectors';

// React
import { useEffect } from 'react';
import { lazy } from 'react';
// Routes
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from 'guards/PrivateRoute';
import { RestrictedRoute } from 'guards/RestrictedRoute';

const Register = lazy(() => import('Pages/Register'));
const Login = lazy(() => import('Pages/Login'));
const Contacts = lazy(() => import('Pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
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
