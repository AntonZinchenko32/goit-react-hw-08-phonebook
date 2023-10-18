// Components
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Loader } from 'components/Loader';
// Redux
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

// React
import { useEffect } from 'react';

// Styles
import { Container, Headline } from './App.styled';
import { Global } from 'styles/Global.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Global />
      <Container>
        <Headline>Phonebook</Headline>
        <ContactForm />
        <Headline>Contacts</Headline>
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactList />
      </Container>
    </>
  );
};
