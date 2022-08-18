import { AppDispatch } from "store";
import { SocketType } from "types/socket";
import { SearchListeners } from "./search/SearchListeners";
import { NavigateFunction } from "react-router";
import { ConversationListener } from "./conversation/ConversationListener";
import { IMessageFromServer } from "types/models/IMessage";
import { IConversation } from "types/models/IConversation";

export const initSocketListeners = (
  socket: SocketType,
  dispatch: AppDispatch,
  nav: NavigateFunction
) => {
  socket.on("queryUsersRes", (data) => {
    SearchListeners.queryUsersRes(data, dispatch);
  });
  socket.on("conversationCreated", () => {
    ConversationListener.conversationCreated(nav, dispatch, socket);
  });
  socket.on("sendMessage", (data: IMessageFromServer) => {
    ConversationListener.sendMessage(data, dispatch);
  });
};
