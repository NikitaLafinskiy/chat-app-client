import axios from "axios";
import { NavigateFunction } from "react-router-dom";

// export const API_URL = "http://localhost:6969/api";
export const API_URL = "https://chat-platform-server.herokuapp.com/api";

export const $api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  if (!config?.headers) {
    throw new Error(
      `Expected 'config' and 'config.headers' not to be undefined`
    );
  }
  config.headers.authorization = `Bearer ${localStorage.getItem(
    "accessUUID"
  )}, Refresh ${localStorage.getItem("refreshUUID")}`;
  return config;
});
