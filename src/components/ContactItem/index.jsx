import { useDispatch } from 'react-redux';

import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import { Item, DeleteButton } from './ContactItem.styled';

const ContactItem = ({ name, id, number }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(deleteContact(id)).unwrap();
    dispatch(fetchContacts());
  };

  return (
    <Item>
      {name}: {number}
      <DeleteButton onClick={() => handleDelete()}>Delete</DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
