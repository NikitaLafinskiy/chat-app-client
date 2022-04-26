import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IConversation } from "types/models/IConversation";
import { IMessageFromServer, MessagePayload } from "types/models/IMessage";
import { ChatState } from "types/redux/chat.d";

const initialState: ChatState = {
  conversations: [],
  error: null,
  currentConversation: null,
  messages: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setConversations(state, action: PayloadAction<IConversation[]>) {
      state.conversations = action.payload;
      state.error = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setCurrentConversation(state, action: PayloadAction<IConversation>) {
      state.currentConversation = action.payload;
    },
    updateMessage: (state, action: PayloadAction<IMessageFromServer>) => {
      state.messages = [...state.messages, action.payload];
    },
    updateManyMessages: (
      state,
      action: PayloadAction<IMessageFromServer[]>
    ) => {
      console.log(state.messages);
      console.log(action.payload);
      state.messages = [...action.payload];
    },
  },
});

export const chatReducer = chatSlice.reducer;
