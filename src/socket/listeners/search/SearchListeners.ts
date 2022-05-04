import { AppDispatch } from "store";
import { searchSlice } from "store/search/SearchSlice";
import { IUser } from "types/models/IUser";

export class SearchListeners {
  static queryUsersRes(data: { users: IUser[] }, dispatch: AppDispatch) {
    if (data.users.length !== 0) {
      dispatch(searchSlice.actions.updateResults(data.users));
    } else if (data.users.length === 0) {
      dispatch(searchSlice.actions.updateError("No users found"));
    }
  }
}
