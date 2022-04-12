import { $api } from "../../http";
import {
  authResponse,
  logoutResponse,
  refreshResponse,
  getUserResponse,
} from "types/http.d";
import { AxiosResponse } from "axios";

export class AuthServices {
  static async register(
    username: string,
    password: string
  ): Promise<AxiosResponse<authResponse>> {
    return $api.post("/auth/register", { username, password });
  }

  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<authResponse>> {
    return $api.post("/auth/login", { username, password });
  }

  static async refresh(): Promise<AxiosResponse<refreshResponse>> {
    return $api.get("/auth/refresh");
  }

  static async logout(): Promise<AxiosResponse<logoutResponse>> {
    return $api.get("/auth/logout");
  }

  static async getUser(): Promise<AxiosResponse<getUserResponse>> {
    return $api.get("/auth/getUser");
  }
}
