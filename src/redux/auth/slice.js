import { createSlice, isFulfilled, isPending } from '@reduxjs/toolkit';

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
  isRefreshing: false,
  isLoading: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(refreshUser.fulfilled, handleRefresh)
      .addCase(logOut.fulfilled, handleLogOut)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(logIn.rejected, state =>
      {
        state.isLoading = false
        return handleReject('User not found or wrong password')
      }
      )
      .addCase(register.rejected, state =>
      {
        state.isLoading = false
        return handleReject('This email is already registered')
      }
      )
      .addMatcher(isFulfilled(register, logIn), handleLogIn)
      .addMatcher(isPending(register, logIn), state => {state.isLoading = true})
  },
});

export const authReducer = authSlice.reducer;
