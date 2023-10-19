import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/users/';

export const signUp = async (name, email, password) => {
    console.log({name, email, password});
  const {data} = await axios.post('/signup', {name, email, password});
  return data;
};