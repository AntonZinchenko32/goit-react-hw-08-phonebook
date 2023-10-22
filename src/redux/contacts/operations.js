import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAll, addItem, deleteItem } from 'api/contacts';

// Fetch All
export const fetchContacts = createAsyncThunk('contacts/fetchAll', () =>
  fetchAll()
);

// Add One
export const addContact = createAsyncThunk(
  'contacts/addContact',
  ({ name, number }) => addItem(name, number)
);

// Delete One
export const deleteContact = createAsyncThunk('contacts/deleteContact', id =>
  deleteItem(id)
);
