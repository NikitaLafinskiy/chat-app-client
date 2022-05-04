import { SingleSearchResultProps } from "types/components/elements";
import { ConversationEmitters } from "socket/emitters";
import { useAppSelector, useAppDispatch } from "hooks/redux.hooks";
import { SocketType } from "types/socket";
import { ElementHelpers } from "utils/elements/ElementsHelpers";
import { IUser } from "types/models/IUser";
import "./SingleSearchResults.scss";

function SingleSearchResult({ result, error }: SingleSearchResultProps) {
  const { socket } = useAppSelector((state) => state.socketReducer);
  const { user } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  if (error) {
    return (
      <div className={`elements__single-search-result__error`}>
        <p>{error}</p>
      </div>
    );
  }

  const groupName = ElementHelpers.pmGroupName(
    [result as IUser],
    user as IUser
  );

  const handleClick = () => {
    if (user && result) {
      ConversationEmitters.createConversation(socket as SocketType, {
        isPrivate: true,
        users: [result],
        currentUser: user,
        groupName,
        dispatch,
      });
    }
  };

  return (
    <div className={`elements__single-search-result`} onClick={handleClick}>
      <p> {result?.username} </p>
    </div>
  );
}

export default SingleSearchResult;
