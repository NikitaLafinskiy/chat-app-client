import { IUser } from "./models/IUser.d";

export interface authResponse {
  refreshToken: string;
  accessToken: string;
  user: IUser;
}

export interface refreshResponse {
  accessToken: string;
}

export interface logoutResponse {
  msg: string;
}

export interface getUserResponse {
  user: IUser;
}
