import { $api } from "../../http";
import { getConversations, getMessages } from "types/http.d";
import { AxiosResponse } from "axios";

export class ChatServices {
  static getConversations(
    userID: number
  ): Promise<AxiosResponse<getConversations>> {
    return $api.get(`/chat/conversations/${userID}`);
  }

  static getMessages(
    conversationID: string
  ): Promise<AxiosResponse<getMessages>> {
    return $api.post(`/chat/messages`, { conversationID });
  }
}
