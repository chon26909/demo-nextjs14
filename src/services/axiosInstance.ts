import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const dummyApi = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});
