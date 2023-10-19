import { useDispatch } from 'react-redux';

import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import { Item, DeleteButton } from './ContactItem.styled';

const ContactItem = ({ name, id, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(deleteContact(id)).unwrap();
    dispatch(fetchContacts());
  };

  return (
    <Item>
      {name}: {phone}
      <DeleteButton onClick={() => handleDelete()}>Delete</DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
