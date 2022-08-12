import { IUser, IConversation } from "./models/IUser.d";

export interface authResponse {
  refreshUUID: string;
  accessUUID: string;
  user: IUser;
}

export interface refreshResponse {
  accessUUID: string;
}

export interface logoutResponse {
  msg: string;
}

export interface getUserResponse {
  user: IUser;
  accessUUID?: string;
  refreshUUID?: string;
}

export interface getConversations {
  conversations: IConversation[];
}

export interface getMessages {
  messages: IMessage[];
}
