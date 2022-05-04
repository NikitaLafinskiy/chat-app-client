import { IConversation } from "types/models/IConversation";
import { IMessageFromServer } from "types/models/IMessage";

export interface ChatState {
  conversations: IConversation[];
  error: string | null;
  currentConversation: IConversation | null;
  messages: IMessageFromServer[];
  messagesDiv: HTMLDivElement | null;
}
