import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  handleFulfilled,
  handleFulfilledAll,
  handlePending,
  handleRejected,
} from './helpers';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledAll)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      )
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
