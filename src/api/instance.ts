import axios, { AxiosError, AxiosResponse } from "axios";
import { useNotificationStore } from "../store/notificationStore";

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

api.interceptors.response.use(onRequestFulfilled, onRequestRejected);
searchAPI.interceptors.response.use(onRequestFulfilled, onRequestRejected);

function onRequestFulfilled(value: AxiosResponse<any, any>) {
  return value;
}

function onRequestRejected(error: AxiosError) {
  useNotificationStore.getState().show({
    message: error.message,
    type: "error",
  });
  return null;
}
