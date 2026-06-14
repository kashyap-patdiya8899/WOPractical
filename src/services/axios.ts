import { API_URL } from "@env";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error) => Promise.reject(error),
);

api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => Promise.reject(error),
);

export default api;