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
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <EmailIcon
            sx={{
              color: 'action.active',
              mr: 2,
              my: 0.5,
            }}
          />
          <TextField
            fullWidth
            name="email"
            type="email"
            label="e-mail"
            variant="standard"
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <VpnKeyIcon
            sx={{
              color: 'action.active',
              mr: 2,
              my: 0.5,
            }}
          />
          <TextField
            margin="dense"
            fullWidth
            name="password"
            label="password"
            variant="standard"
            type="password"
          />
        </Box>
      </Box>
      <Button
        sx={{ margin: '15px auto 0px auto', width: '100px' }}
        type="submit"
        variant="contained"
      >
        LogIn
      </Button>
    </Form>
  );
};
