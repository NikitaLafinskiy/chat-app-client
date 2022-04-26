import { IConversation } from "types/models/IConversation.d";

export interface WrapperProps {
  children: React.ReactNode;
}

export interface MessagesWrapperProps extends WrapperProps {
  conversation: IConversation | null;
}
