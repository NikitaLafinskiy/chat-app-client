import { Socket } from "socket.io-client";
import { IUser } from "types/models/IUser.d";
import { MessagePayload } from "types/models/IMessage.d";

export interface ServerToClientEvents {
  queryUsersRes: (data: { users: IUser[]; error: string | null }) => void;
  conversationCreated: () => void;
  sendMessage: (data: IMessageFromServer) => void;
}

export interface ClientToServerEvents {
  queryUsers: ({ query: string, user: IUser }) => void;
  createConversation: (data: {
    isPrivate: boolean;
    currentUser: IUser;
    users: IUser[];
    groupName: string;
  }) => void;
  sendMessage: (payload: MessagePayload) => void;
  joinUser: (conversationID: string) => void;
}

export type SocketType = Socket<ServerToClientEvents, ClientToServerEvents>;
