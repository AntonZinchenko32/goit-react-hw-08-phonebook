import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp, signIn, signOut, refresh } from 'api/auth';

// Register
export const register = createAsyncThunk(
  'auth/register',
  ({ name, email, password }) => signUp(name, email, password)
);

// LogIn
export const logIn = createAsyncThunk('auth/login', ({ email, password }) =>
  signIn(email, password)
);

// LogOut
export const logOut = createAsyncThunk('auth/logout', () => signOut());

// Refresh
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue }) => {
    const persistedAuthData = JSON.parse(localStorage.getItem('persist:auth'));
    const parsedPersistedToken = JSON.parse(persistedAuthData?.token);

    if (parsedPersistedToken === null)
      return rejectWithValue('Unable to fetch user');
    else return refresh(parsedPersistedToken);
  }
);
