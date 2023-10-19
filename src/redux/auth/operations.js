import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp, signIn, signOut, refresh } from 'services/users-api';

export const register = createAsyncThunk(
  'auth/register',
  ({ name, email, password }) => signUp(name, email, password)
);

export const logIn = createAsyncThunk('auth/login', ({ email, password }) =>
  signIn(email, password)
);

export const logOut = createAsyncThunk('auth/login', () => signOut());

export const refreshUser = createAsyncThunk('auth/refresh', () => refresh());
