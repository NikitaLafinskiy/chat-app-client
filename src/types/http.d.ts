import { IUser } from './models/IUser.d';

export interface authResponse {
  refreshToken: string;
  accessToken: string;
  user: IUser;
}

export interface refreshReponse {
  accessToken: string;
}

export interface logoutReponse {
  msg: string;
}
