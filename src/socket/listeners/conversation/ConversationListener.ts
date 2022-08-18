import { AppDispatch } from "store";
import { SearchActions } from "store/search/ActionCreators";
import { SocketType } from "types/socket";
import { NavigateFunction } from "react-router-dom";
import { IMessageFromServer } from "types/models/IMessage";
import { chatSlice } from "store/chat/ChatSlice";
import { store } from "store";

export class ConversationListener {
  static conversationCreated(
    nav: NavigateFunction,
    dispatch: AppDispatch,
    socket: SocketType
  ) {
    nav("/");
    dispatch(SearchActions.stopQuery());
  }

  static sendMessage(message: IMessageFromServer, dispatch: AppDispatch) {
    const state = store.getState();
    const conversation = state.chatReducer.currentConversation;
    if (message.conversation.id === conversation!.id) {
      dispatch(chatSlice.actions.updateMessage(message));
      return;
    }
    return;
  }
}
