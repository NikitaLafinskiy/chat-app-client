import { AppDispatch } from "store";
import { searchSlice } from "./SearchSlice";
import { SocketType } from "types/socket";

export class SearchActions {
  static makeQueryRequest(query: string, socket: SocketType) {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(searchSlice.actions.updateQuery(query));
        socket.emit("queryUsers", query);
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
