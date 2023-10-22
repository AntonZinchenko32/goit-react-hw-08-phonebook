import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import ContactItem from 'components/ContactItem';

// MUI
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  // MUi
  function generate(element) {
    return visibleContacts.map(value =>
      React.cloneElement(element, {
        key: value.id,
        name: value.name,
        number: value.number,
        id: value.id,
      })
    );
  }

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Demo>
            <List>{generate(<ContactItem />)}</List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactList;
