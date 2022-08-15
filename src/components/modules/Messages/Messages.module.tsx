import { useAppSelector, useAppDispatch } from "hooks/redux.hooks";
import { useState, useRef, useEffect } from "react";
import { Loader, Message } from "components/elements";
import useIntersect from "hooks/useIntersect";
import "./Messages.scss";
import { ChatActions } from "store/chat/ActionCreators";
import { IConversation } from "types/models/IConversation";

function Messages() {
  const { messages, currentConversation, isMoreMessages } = useAppSelector(
    (state) => state.chatReducer
  );
  const { isMobile } = useAppSelector((state) => state.screenReducer);
  const dispatch = useAppDispatch();
  const updateMessagesRef = useRef<HTMLDivElement | null>(null);

  const { isVisible } = useIntersect(updateMessagesRef);
  const [count, setCount] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleScroll = async () => {
    if (isVisible && !isSubmitting && isMoreMessages) {
      setIsSubmitting(true);
      await dispatch(
        ChatActions.loadNewMessages(currentConversation as IConversation, count)
      );
      setCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setCount(1);
  }, [currentConversation]);

  useEffect(() => {
    setIsSubmitting(false);
  }, [count]);

  return (
    <div
      onScroll={handleScroll}
      className={`modules__messages${isMobile ? "__mobile" : ""}`}
    >
      <div
        className={`modules__messages${
          isMobile ? "__mobile" : ""
        }__loaderWrapper`}
        style={isMoreMessages ? undefined : { display: "none" }}
      >
        <Loader
          ref={(el) => {
            updateMessagesRef.current = el;
          }}
        />
      </div>
      {messages.map((message) => {
        return (
          <Message key={message.id} body={message.body} from={message.from} />
        );
      })}
    </div>
  );
}

export default Messages;
