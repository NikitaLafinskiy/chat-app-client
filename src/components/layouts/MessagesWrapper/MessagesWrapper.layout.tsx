import { useAppSelector } from "hooks/redux.hooks";
import { useEffect, useRef } from "react";
import { MessagesWrapperProps } from "types/components/layouts.d";
import "./MessagesWrapper.scss";

function MessagesWrapper({ children, conversation }: MessagesWrapperProps) {
  const messagesDiv = useRef<HTMLDivElement>(null);
  const { messages, messagesLoaded, messagesSentDuringSession } =
    useAppSelector((state) => state.chatReducer);
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

      const msgNum = messagesLoaded + messagesSentDuringSession;
      const msg = allMessagesDiv.children[msgNum] as HTMLElement;
      if (msg) {
        allMessagesDiv.scrollTop =
          msg.offsetTop - (window.screen.height - window.screen.height * 0.3);
      }
    }
  }, [messagesDiv, messages, messagesLoaded, messagesSentDuringSession]);

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
