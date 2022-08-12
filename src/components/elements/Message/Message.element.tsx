import { MessageProps } from "types/components/elements";
import { useAppSelector } from "hooks/redux.hooks";
import "./Message.scss";

const Message = ({ body, from }: MessageProps) => {
  const { user } = useAppSelector((state) => state.authReducer);
  const sentFromCurrentUser = user!.id === from;

  if (sentFromCurrentUser) {
    return <div className={`elements__message__current`}>{body}</div>;
  }

  return <div className={`elements__message__other`}>{body}</div>;
};

export default Message;
