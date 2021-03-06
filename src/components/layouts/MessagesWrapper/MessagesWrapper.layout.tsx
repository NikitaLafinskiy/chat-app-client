import { useAppDispatch, useAppSelector } from "hooks/redux.hooks";
import { useEffect, useRef } from "react";
import { MessagesWrapperProps } from "types/components/layouts.d";
import "./MessagesWrapper.scss";

function MessagesWrapper({ children, conversation }: MessagesWrapperProps) {
  const messagesDiv = useRef<HTMLDivElement>(null);
  const { messages } = useAppSelector((state) => state.chatReducer);
  const { isMobile } = useAppSelector((state) => state.screenReducer);

  useEffect(() => {
    if (
      messagesDiv.current
        ?.getElementsByTagName("div")[0]
        .getElementsByTagName("div")[0]
    ) {
      const allMessagesDiv = isMobile
        ? messagesDiv.current?.getElementsByTagName("div")[2]
        : messagesDiv.current
            ?.getElementsByTagName("div")
            [isMobile ? 2 : 0].getElementsByTagName("div")[0];

      allMessagesDiv.scrollTop = allMessagesDiv.scrollHeight;
    }
  }, [messagesDiv, messages]);

  return (
    <div ref={messagesDiv} className={`layouts__messages-wrapper`}>
      {conversation ? (
        <div>{children}</div>
      ) : (
        <div id='no-messages'>
          <div>No messages with current user</div>
        </div>
      )}
    </div>
  );
}

export default MessagesWrapper;
