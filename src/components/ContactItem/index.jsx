import { useDispatch } from 'react-redux';

import { deleteContact, fetchContacts } from 'redux/contacts/operations';

import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ListItemText from '@mui/material/ListItemText';

const ContactItem = ({ name, id, number }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(deleteContact(id)).unwrap();
    dispatch(fetchContacts());
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton
          onClick={() => handleDelete()}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <ContactPhoneIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={number} />
    </ListItem>
  );
};

export default ContactItem;
