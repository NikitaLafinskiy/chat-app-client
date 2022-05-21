import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { refresh } from "./RefreshInterceptor";

// export const API_URL = "http://localhost:6969/api";
export const API_URL = "https://chat-platform-server.herokuapp.com/api";

export const $api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const setupInterceptors = (nav: NavigateFunction) => {
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
          nav("/login");
        }
      }
    }
  );
};
