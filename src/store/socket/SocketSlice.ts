import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SocketState } from 'types/redux/socket.d';
import { SocketType } from 'types/socket.d';

const initialState: SocketState = {
  socket: null,
  error: '',
};

export const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    setSocket(state, action: PayloadAction<SocketType>) {
      return { ...state, socket: action.payload, error: '' };
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const socketReducer = socketSlice.reducer;
