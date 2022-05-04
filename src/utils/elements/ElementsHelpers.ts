import { IUser } from "types/models/IUser";

export class ElementHelpers {
  static convertClass(
    initialName: string,
    additionalClassName: string | undefined
  ): string {
    const classes = additionalClassName
      ? `${additionalClassName} ${initialName}`
      : `${initialName}`;

    return classes;
  }

  static pmGroupName(users: IUser[], currentUser: IUser): string {
    const groupName = `pm__${users[0].username}__${currentUser.username}`;

    return groupName;
  }
}
