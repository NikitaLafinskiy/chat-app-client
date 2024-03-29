import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IConversation } from "types/models/IConversation";
import { IMessageFromServer } from "types/models/IMessage";
import { ChatState } from "types/redux/chat.d";

const initialState: ChatState = {
  conversations: [],
  error: null,
  currentConversation: null,
  messages: [],
  messagesDiv: null,
  messagesLoaded: 30,
  messagesSentDuringSession: 0,
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
    setCurrentConversation(state, action: PayloadAction<IConversation | null>) {
      state.currentConversation = action.payload;
    },
    updateMessage: (state, action: PayloadAction<IMessageFromServer>) => {
      state.messages = [...state.messages, action.payload];
    },
    updateManyMessages: (
      state,
      action: PayloadAction<IMessageFromServer[]>
    ) => {
      state.messages = [...action.payload];
    },
    lazyLoadNewMessages: (
      state,
      action: PayloadAction<IMessageFromServer[]>
    ) => {
      state.messages = [...action.payload, ...state.messages];
    },
    setMessagesLoaded: (state, action: PayloadAction<number>) => {
      state.messagesLoaded = action.payload;
    },
    setMessagesSentDuringSession: (state, action: PayloadAction<number>) => {
      if (action.payload === 0) {
        state.messagesSentDuringSession = 0;
        return;
      }
      state.messagesSentDuringSession =
        state.messagesSentDuringSession + action.payload;
    },
  },
});

export const chatReducer = chatSlice.reducer;
