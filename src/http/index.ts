import axios from "axios";

// export const API_URL = "http://localhost:6969/api";
export const API_URL = "http://167.172.105.123/api";

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
