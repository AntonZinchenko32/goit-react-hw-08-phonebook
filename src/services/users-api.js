import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/users/';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = async (name, email, password) => {
  console.log({ name, email, password });
  const { data } = await axios.post('/signup', { name, email, password });
  setAuthHeader(data.token);
  return data;
};

export const signIn = async (email, password) => {
  const { data } = await axios.post('/login', { email, password });
  setAuthHeader(data.token);
  return data;
};

export const refresh = async () => {
  const token = JSON.parse(localStorage.getItem('persist:auth'))
  setAuthHeader(JSON.parse(token?.token))
  const { data } = await axios.get('/current')
  return data
}

export const signOut = async () => {
  await axios.post('/users/logout');
  clearAuthHeader();
}


