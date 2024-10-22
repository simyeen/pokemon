import axios from 'axios';
import PoketmonAPI from './pokemon/PoketmonAPI';

export const defaultAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const poketmonAPI = PoketmonAPI(defaultAxios);
