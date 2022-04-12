import { AppDispatch } from "store";
import { searchSlice } from "./SearchSlice";
import { SocketType } from "types/socket";

export class SearchActions {
  static makeQueryRequest(query: string, socket: SocketType) {
    return async (dispatch: AppDispatch) => {
      dispatch(searchSlice.actions.updateQuery(query));
      socket.emit("queryUsers", query);
    };
  }
}
