import { SingleConversationProps } from "types/components/elements";
import { useAppSelector, useAppDispatch } from "hooks/redux.hooks";
import { ChatActions } from "store/chat/ActionCreators";
import { IConversation } from "types/models/IConversation";
import "./SingleConversation.scss";

function SingleConversation({
  children,
  isPrivate,
  conversation,
}: SingleConversationProps) {
  const { user } = useAppSelector((state) => state.authReducer);
  const { socket } = useAppSelector((state) => state.socketReducer);
  const { currentConversation } = useAppSelector((state) => state.chatReducer);
  const dispatch = useAppDispatch();

  const activeClassName =
    currentConversation === conversation
      ? "elements__single-conversation__active"
      : "elements__single-conversation";

  const handleJoin = (conversation: IConversation) => {
    if (socket) {
      dispatch(ChatActions.setConversation(conversation, socket));
    }
  };

  if (!isPrivate) {
    return (
      <div
        onClick={() => handleJoin(conversation)}
        className={`${activeClassName}`}
      >
        <p>{children}</p>
      </div>
    );
  }

  const names = children.split("__");
  const name = names.filter((name) => name !== user?.username && name !== "pm");

  return (
    <div
      onClick={() => handleJoin(conversation)}
      className={`${activeClassName}`}
    >
      <p>{name}</p>
    </div>
  );
}

export default SingleConversation;
