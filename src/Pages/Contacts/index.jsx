// React
import { useEffect } from 'react';
// Components
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Loader } from 'components/Loader';
// Styles
import { Container } from './Contacts.styled';
// Redux
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </Container>
  );
};

export default Contacts;
