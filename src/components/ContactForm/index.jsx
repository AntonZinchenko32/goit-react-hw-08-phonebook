// redux
import { selectContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from 'redux/contacts/operations';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactForm = () => {
  const contactsList = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleCheck = async (contacts, contactData) => {
    const { name, number } = contactData;
    const gotMatch = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (!gotMatch) {
      await dispatch(addContact({ name, number })).unwrap();
      dispatch(fetchContacts());
    } else {
      alert(`${name} already in list`);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;

    const { nameInput, numberInput } = evt.currentTarget.elements;

    const name = nameInput.value.trim();
    const number = numberInput.value.trim();

    handleCheck(contactsList, { name, number });

    form.reset();
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
        display: 'flex',
        alignItems: 'center',
      }}
      autoComplete="off"
    >
      <div>
        <TextField
          label="Name"
          id="filled-size-small"
          variant="filled"
          size="small"
          name="nameInput"
          type="text"
        />
        <TextField
          label="Number"
          id="filled-size-normal"
          variant="filled"
          size="small"
          name="numberInput"
          type="tel"
        />
      </div>
      <Button
        sx={{ height: '40px', marginLeft: '20px' }}
        type="submit"
        variant="contained"
      >
        Add Contact
      </Button>
    </Box>
  );
};

export default ContactForm;
