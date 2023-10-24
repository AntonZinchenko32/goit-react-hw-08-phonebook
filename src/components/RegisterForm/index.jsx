import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form } from './RegisterForm.styled';

// MUI
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import Button from '@mui/material/Button';
// MUI

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          <BadgeIcon
            sx={{
              color: 'action.active',
              mr: 2,
              my: 0.5,
            }}
          />
          <TextField
            fullWidth
            name="name"
            type="text"
            label="name"
            variant="standard"
            required
            inputProps={{
              inputMode: 'text',
              pattern: '[^0-9,s]{2,20}',
            }}
          />
        </Box>
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
            required
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
            required
            inputProps={{
              inputMode: 'password',
              pattern: '.{7,}',
            }}
          />
        </Box>
      </Box>
      <Button
        sx={{ margin: '15px auto 0px auto', width: '100px' }}
        type="submit"
        variant="contained"
      >
        Register
      </Button>
    </Form>
  );
};
