import { IUser } from "types/models/IUser";

export const useGroupName = (users: IUser[], currentUser: IUser) => {
  const groupName = `pm__${users[0].username}__${currentUser.username}`;

  return groupName;
};
