import axios from 'axios';

axios.defaults.baseURL = 'https://6526f15a917d673fd76d3ea3.mockapi.io';

export const fetchAll = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addItem = async (name, phone) => {
  const {data} = await axios.post('/contacts', {name, phone});
  return data;
};

export const deleteItem = async contactId => {
  const {data} = await axios.delete(`/contacts/${contactId}`);
  return data;
};

