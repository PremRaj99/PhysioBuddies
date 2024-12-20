import axios from 'axios';

const token = localStorage.getItem('accessToken');
const Axios = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    },
});

export default Axios;