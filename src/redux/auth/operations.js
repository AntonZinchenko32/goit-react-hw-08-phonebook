import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp } from 'services/users-api';

export const register = createAsyncThunk(
  'auth/register',
  ({ name, email, password }) => signUp(name, email, password)
);