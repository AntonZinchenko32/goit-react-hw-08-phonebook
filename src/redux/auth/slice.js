import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

import { handleLogIn, handleLogOut, handleRefresh } from './helpers';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
        .addCase((register.fulfilled || logIn.fulfilled), handleLogIn)
        .addCase(logOut.fulfilled, handleLogOut)
        .addCase(refreshUser.pending, state => state.isRefreshing = true)
        .addCase(refreshUser.rejected, state => state.isRefreshing = false)
        .addCase(refreshUser.fulfilled, handleRefresh)
}
    
});

export const authReducer = authSlice.reducer;