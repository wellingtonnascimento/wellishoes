import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nifty-brattain-e9ddac.netlify.app/.netlify/functions/',
});

export default api;
