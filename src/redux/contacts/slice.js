import { createSlice, isRejected, isPending, isFulfilled } from '@reduxjs/toolkit';
import {
  handleFulfilled,
  handleFulfilledAll,
  handlePending,
  handleRejected,
} from './helpers';
import { addContact, deleteContact, fetchContacts } from './operations';

const allOperations = [addContact, deleteContact, fetchContacts]

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
      .addMatcher(isPending(...allOperations), handlePending)
      .addMatcher(
        isRejected(...allOperations),
        handleRejected
      )
      .addMatcher(isFulfilled(...allOperations), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
