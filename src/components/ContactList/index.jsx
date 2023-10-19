import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import ContactItem from 'components/ContactItem';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};

export default ContactList;
