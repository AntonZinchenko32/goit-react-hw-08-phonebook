

import { createSlice, isFulfilled, isPending, isAnyOf } from '@reduxjs/toolkit';

import { register, logIn, logOut, refreshUser } from './operations';

import {
  handleLogIn,
  handleLogOut,
  handleRefresh,
  handleReject,
  toogleLoader
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
      .addCase(refreshUser.fulfilled, handleRefresh)
      .addCase(logIn.rejected, state => {
        toogleLoader(state)
        handleReject('User not found or wrong password')
      })
      .addCase(register.rejected, state => {
        toogleLoader(state)
        handleReject('This email is already registered')
      })
      .addCase(logOut.fulfilled, handleLogOut)
      .addMatcher(isAnyOf(refreshUser.pending, refreshUser.rejected), toogleLoader)
      .addMatcher(isPending(register, logIn, logOut), toogleLoader)
      .addMatcher(isFulfilled(register, logIn), handleLogIn);
  },
});

export const authReducer = authSlice.reducer;
