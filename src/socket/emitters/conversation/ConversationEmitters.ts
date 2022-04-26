import { AppDispatch } from "store";
import { searchSlice } from "store/search/SearchSlice";
import { IConversation } from "types/models/IConversation";
import { MessagePayload } from "types/models/IMessage";
import { IUser } from "types/models/IUser";
import { SocketType } from "types/socket";

export class ConversationEmitters {
  static createConversation(
    socket: SocketType,
    payload: {
      isPrivate: boolean;
      users: IUser[];
      currentUser: IUser;
      groupName: string;
      dispatch: AppDispatch;
    }
  ) {
    payload.dispatch(searchSlice.actions.toggleFocus(false));
    socket.emit("createConversation", {
      ...payload,
    });
  }

  static joinUser(socket: SocketType, conversation: IConversation) {
    socket.emit("joinUser", conversation.id);
  }

  static sendMessage(socket: SocketType, payload: MessagePayload) {
    socket.emit("sendMessage", payload);
  }
}
