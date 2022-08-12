import { AppDispatch } from "store";
import { chatSlice } from "./ChatSlice";
import { ChatServices } from "services/chat/ChatServices";
import { MessagePayload } from "types/models/IMessage";
import { ConversationEmitters } from "socket/emitters";
import { SocketType } from "types/socket";
import { IConversation } from "types/models/IConversation";

export class ChatActions {
  static getConversations(userID: number) {
    return async (dispatch: AppDispatch) => {
      try {
        const res = await ChatServices.getConversations(userID);
        dispatch(chatSlice.actions.setConversations(res.data.conversations));
      } catch (err) {
        dispatch(chatSlice.actions.setError("No chats"));
      }
    };
  }

  static setConversation(conversation: IConversation, socket: SocketType) {
    return async (dispatch: AppDispatch) => {
      try {
        ConversationEmitters.joinUser(socket, conversation);
        const res = await ChatServices.getMessages(conversation.id, 0);

        dispatch(chatSlice.actions.setCurrentConversation(conversation));
        dispatch(chatSlice.actions.updateManyMessages(res.data.messages));
      } catch (err) {
        dispatch(chatSlice.actions.setError("No messages sent"));
      }
    };
  }

  static loadNewMessages(conversation: IConversation, index: number) {
    return async (dispatch: AppDispatch) => {
      try {
        const res = await ChatServices.getMessages(conversation.id, index);
        dispatch(chatSlice.actions.lazyLoadNewMessages([...res.data.messages]));
      } catch (err) {
        dispatch(chatSlice.actions.setError("No new messages"));
      }
    };
  }

  static sendMessage(payload: MessagePayload, socket: SocketType) {
    return () => {
      ConversationEmitters.sendMessage(socket, payload);
    };
  }
}
