// src/api/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:7158/api/', // Asegúrate que esta URL sea correcta
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
