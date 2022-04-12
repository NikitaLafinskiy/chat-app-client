import { AppDispatch } from "store";
import { SocketType } from "types/socket";
import { SearchListeners } from "./SearchListeners";

export const initSocketListeners = (
  socket: SocketType,
  dispatch: AppDispatch
) => {
  socket.on("queryUsersRes", (data) => {
    console.log(data);
    SearchListeners.queryUsersRes(data, dispatch);
  });
};
