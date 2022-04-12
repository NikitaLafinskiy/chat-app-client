import { Socket } from "socket.io-client";
import { IUser } from "types/models/IUser.d";

export interface ServerToClientEvents {
  queryUsersRes: (data: { users: IUser[]; error: string | null }) => void;
}

export interface ClientToServerEvents {
  queryUsers: (query: string) => void;
  createConversation: (data: {
    isPrivate: boolean;
    currentUser: IUser;
    users: IUser[];
    groupName: string;
  }) => void;
}

export type SocketType = Socket<ServerToClientEvents, ClientToServerEvents>;
