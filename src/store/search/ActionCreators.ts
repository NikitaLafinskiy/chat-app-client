import { AppDispatch } from "store";
import { searchSlice } from "./SearchSlice";
import { SocketType } from "types/socket";
import { IUser } from "types/models/IUser";

export class SearchActions {
  static makeQueryRequest(query: string, user: IUser, socket: SocketType) {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(searchSlice.actions.updateQuery(query));
        socket.emit("queryUsers", { query, user });
      } catch (err) {
        dispatch(
          searchSlice.actions.updateError(
            "An error occured while searching for the user"
          )
        );
      }
    };
  }

  static stopQuery() {
    return async (dispatch: AppDispatch) => {
      dispatch(searchSlice.actions.updateQuery(""));
      dispatch(searchSlice.actions.updateResults([]));
    };
  }
}
