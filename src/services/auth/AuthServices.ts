import { $api } from '../../http';
import { authResponse, logoutReponse, refreshReponse } from 'types/http.d';
import { AxiosResponse } from 'axios';

export class AuthServices {
  static async register(
    username: string,
    password: string
  ): Promise<AxiosResponse<authResponse>> {
    return $api.post('/auth/register', { username, password });
  }

  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<authResponse>> {
    return $api.post('/auth/login', { username, password });
  }

  static async refresh(): Promise<AxiosResponse<refreshReponse>> {
    return $api.get('/auth/refresh');
  }

  static async logout(): Promise<AxiosResponse<logoutReponse>> {
    return $api.get('/auth/logout');
  }
}
