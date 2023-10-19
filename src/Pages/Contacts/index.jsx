// Components
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Loader } from 'components/Loader';
// Styles
import { Container, Headline } from './Contacts.styled';
// Redux
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Container>
      <Headline>Phonebook</Headline>
      <ContactForm />
      <Headline>Contacts</Headline>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </Container>
  );
};

export default Contacts;
