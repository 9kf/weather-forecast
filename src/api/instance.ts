import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_WEATHERBIT_BASE_URL,
  params: {
    key: import.meta.env.VITE_WEATHERBIT_API_KEY,
  },
});

export const searchAPI = axios.create({
  baseURL: import.meta.env.VITE_MAPBOX_BASE_URL,
  params: {
    access_token: import.meta.env.VITE_MAPBOX_API_KEY,
  },
});
