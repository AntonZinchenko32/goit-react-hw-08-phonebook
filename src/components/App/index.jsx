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

// // Styles
// import { Container, Headline } from './App.styled';

const Register = lazy(() => import('Pages/Register'));
const Login = lazy(() => import('Pages/Login'));
const Contacts = lazy(() => import('Pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
