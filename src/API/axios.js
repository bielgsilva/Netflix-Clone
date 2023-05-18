import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});

export default api