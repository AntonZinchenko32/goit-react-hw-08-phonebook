import { nanoid } from '@reduxjs/toolkit';

// redux
import { selectContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from 'redux/contacts/operations';

import * as React from 'react';
import Button from '@mui/material/Button';

import { Form, Box, Label, Input } from './ContactForm.styled';

const ContactForm = () => {
  const nameInputId = nanoid();
  const phoneInputId = nanoid();
  const contactsList = useSelector(selectContacts);

  const dispatch = useDispatch();

  async function handleCheck(contacts, contactData) {
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
  }

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
    <Form onSubmit={handleSubmit}>
      <Box>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
          id={nameInputId}
          type="text"
          name="nameInput"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Box>
      <Box>
        <Label htmlFor={phoneInputId}>Phone Number</Label>
        <Input
          id={phoneInputId}
          type="tel"
          name="phoneInput"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Box>
      <Button
        sx={{ height: '40px', width: '140px' }}
        type="submit"
        variant="contained"
        fullWidth
      >
        Add Contact
      </Button>
    </Form>
  );
};

export default ContactForm;
