import axios from 'axios';

const productInstance = axios.create({
    baseURL: 'http://localhost:8000/api/product',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        timeout: 1000
    }
})

export default productInstance;