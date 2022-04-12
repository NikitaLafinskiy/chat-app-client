import { AppDispatch } from "store";
import { searchSlice } from "store/search/SearchSlice";
import { IUser } from "types/models/IUser";
import { SocketType } from "types/socket";

export class SearchListeners {
  static queryUsersRes(
    data: { users: IUser[]; error: string | null },
    dispatch: AppDispatch
  ) {
    if (data.users.length !== 0) {
      console.log("updating users");
      dispatch(searchSlice.actions.updateResults(data.users));
    } else if (data.users.length === 0) {
      dispatch(searchSlice.actions.updateError(data.error));
    }
  }
}
