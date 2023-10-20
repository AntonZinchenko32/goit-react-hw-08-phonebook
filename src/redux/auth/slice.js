import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { register, logIn, logOut, refreshUser } from './operations';

import {
  handleLogIn,
  handleLogOut,
  handleRefresh,
  handleReject,
} from './helpers';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, handleLogOut)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(refreshUser.fulfilled, handleRefresh)
      .addCase(logIn.rejected, () => handleReject('User not found or wrong password'))
      .addCase(register.rejected, () =>
        handleReject('This email is already registered')
      )
      .addMatcher(isAnyOf(register.fulfilled, logIn.fulfilled), handleLogIn);
  },
});

export const authReducer = authSlice.reducer;
