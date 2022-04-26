import { IUser } from "types/models/IUser.d";

export interface SearchState {
  query: string;
  results: IUser[];
  error: string | null;
  isSearching: boolean;
}
