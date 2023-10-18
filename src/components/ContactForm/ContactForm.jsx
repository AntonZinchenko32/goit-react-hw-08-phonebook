import { nanoid } from 'nanoid';
// redux
import { selectContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from 'redux/operations';

import { Form, Input, SubmitButton } from './ContactForm.styled';

const ContactForm = () => {
  const contactsList = useSelector(selectContacts);

  const nameInputId = nanoid();
  const phoneInputId = nanoid();

  const dispatch = useDispatch();

  const handleCheck = async (contacts, contactData) => {
    const { name, phone } = contactData;
    const gotMatch = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (!gotMatch) {
      await dispatch(addContact({ name, phone })).unwrap();
      dispatch(fetchContacts());
    } else {
      alert(`${name} already in list`);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;

    const { nameInput, phoneInput } = evt.currentTarget.elements;

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    handleCheck(contactsList, { name, phone });

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <Input
        id={nameInputId}
        type="text"
        name="nameInput"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={phoneInputId}>Phone Number</label>
      <Input
        id={phoneInputId}
        type="tel"
        name="phoneInput"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};

export default ContactForm;
