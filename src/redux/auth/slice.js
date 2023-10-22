import { createSlice, isFulfilled, isPending } from '@reduxjs/toolkit';

import { register, logIn, logOut, refreshUser } from './operations';

import {
  handleLogIn,
  handleLogOut,
  handleRefresh,
  handleReject,
  toogleLoader,
} from './helpers';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(refreshUser.pending, toogleLoader)
      .addCase(refreshUser.rejected, toogleLoader)
      .addCase(refreshUser.fulfilled, handleRefresh)
      .addCase(logIn.rejected, state => {
        toogleLoader(state)
        return handleReject('User not found or wrong password');
      })
      .addCase(register.rejected, state => {
        toogleLoader(state)
        return handleReject('This email is already registered');
      })
      .addCase(logOut.fulfilled, handleLogOut)
      .addMatcher(isPending(register, logIn, logOut), toogleLoader)
      .addMatcher(isFulfilled(register, logIn), handleLogIn);
  },
});

export const authReducer = authSlice.reducer;
