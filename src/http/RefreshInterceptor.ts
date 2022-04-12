import { API_URL, $api } from "./index";
import axios from "axios";

export const refresh = async (err: any) => {
  const initialURL: string = err.response.config.url;

  const res = await axios.get<{ accessToken: string }>(
    `${API_URL}/auth/refresh`,
    {
      withCredentials: true,
    }
  );
  localStorage.setItem("token", res.data.accessToken);
  const initialRes = await $api.get(`${initialURL}`);

  return initialRes;
};
