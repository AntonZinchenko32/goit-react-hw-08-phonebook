import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAll, addItem, deleteItem } from 'api/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () =>
  fetchAll()
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  ({ name, number }) => addItem(name, number)
);

export const deleteContact = createAsyncThunk('contacts/deleteContact', id =>
  deleteItem(id)
);
