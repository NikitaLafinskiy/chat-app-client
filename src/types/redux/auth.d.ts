import { IUser } from 'types/models/IUser.d';

export interface AuthState {
  user: IUser | null;
  error: string;
}
