import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL as string;

export const dummyApi = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // const token = localStorage.getItem('token');
    // config.headers.Authorization = 'Bearer ' + token;
    return config;
};
const onRequestError = (err: AxiosError): Promise<AxiosError> => {
    return Promise.reject(err);
};
dummyApi.interceptors.request.use(onRequest, onRequestError);

const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
};
const onResponseError = (err: AxiosError): Promise<AxiosError> => {
    return Promise.reject(err.response);
};
dummyApi.interceptors.response.use(onResponse, onResponseError);
