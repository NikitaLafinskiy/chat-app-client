export interface IMessage {
  id?: number;
  from: IUser;
  conversation: IConversation;
  body: string;
}

export interface IMessageWithFile extends IMessage {
  file: File;
}

export interface IMessageFromServer extends IMessage {
  file?: string;
  from: number;
}

export type MessagePayload = IMessage | FormData;
