import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form } from './LoginForm.styled';

// MUI
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
// MUI

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Box sx={{ '& > :not(style)': { m: 2 } }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <EmailIcon
            sx={{
              color: 'action.active',
              mr: 1,
              my: 0.5,
            }}
          />
          <TextField
            sx={{ width: '100%' }}
            name="email"
            type="email"
            label="E-mail"
            variant="standard"
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <VpnKeyIcon
            sx={{
              color: 'action.active',
              mr: 1,
              my: 0.5,
            }}
          />
          <TextField
            sx={{ width: '100%' }}
            name="password"
            label="password"
            variant="standard"
            type="password"
          />
        </Box>
      </Box>
      <Button
        sx={{ margin: '0 auto', width: '150px' }}
        type="submit"
        variant="contained"
      >
        LogIn
      </Button>
    </Form>
  );
};
