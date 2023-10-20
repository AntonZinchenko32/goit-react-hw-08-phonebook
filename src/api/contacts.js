import axios from 'axios';


export const fetchAll = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addItem = async (name, number) => {
  const { data } = await axios.post('/contacts', {name, number});
  return data;
};

export const deleteItem = async contactId => {
  const {data} = await axios.delete(`/contacts/${contactId}`);
  return data;
};

