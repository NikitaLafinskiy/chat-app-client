import { IUser } from "types/models/IUser";
import { SocketType } from "types/socket";

export const createConversation = (
  socket: SocketType,
  isPrivate: boolean,
  users: IUser[],
  currentUser: IUser,
  groupName: string
) => {
  socket.emit("createConversation", {
    isPrivate,
    currentUser,
    users,
    groupName,
  });
};
