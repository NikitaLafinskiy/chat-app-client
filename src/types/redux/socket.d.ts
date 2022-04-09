import { SocketType } from 'types/socket.d';

export interface SocketState {
  socket: SocketType | null;
  error: string;
}
