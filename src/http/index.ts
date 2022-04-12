import axios from "axios";
import { refresh } from "./RefreshInterceptor";

export const API_URL = "http://localhost:6969/api";

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
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    if (err.response.status === 401) {
      try {
        const initialRes = await refresh(err);
        return initialRes;
      } catch (err) {
        localStorage.removeItem("token");
      }
    }
  }
);
