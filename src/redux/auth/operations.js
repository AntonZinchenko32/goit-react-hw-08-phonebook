import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp, signIn } from 'services/users-api';

export const register = createAsyncThunk(
  'auth/register',
  ({ name, email, password }) => signUp(name, email, password)
);

export const logIn = createAsyncThunk('auth/login', ({ email, password }) =>
  signIn(email, password)
);
