import { SingleSearchResultProps } from "types/components/elements";
import { createConversation } from "socket/emitters";
import { useAppSelector } from "hooks/redux.hooks";
import { SocketType } from "types/socket";
import { useGroupName } from "hooks/useGroupName";
import { IUser } from "types/models/IUser";

function SingleSearchResult({ result, error }: SingleSearchResultProps) {
  const { socket } = useAppSelector((state) => state.socketReducer);
  const { user } = useAppSelector((state) => state.authReducer);
  const groupName = useGroupName([result as IUser], user as IUser);

  if (error) {
    return <div>{error}</div>;
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e);
    if (user && result) {
      createConversation(socket as SocketType, true, [result], user, groupName);
    }
  };

  return <div onClick={handleClick}> {result?.username}</div>;
}

export default SingleSearchResult;
