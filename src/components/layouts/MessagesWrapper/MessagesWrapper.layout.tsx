import { useAppDispatch, useAppSelector } from "hooks/redux.hooks";
import { useEffect, useRef } from "react";
import { searchSlice } from "store/search/SearchSlice";
import { MessagesWrapperProps } from "types/components/layouts.d";
import "./MessagesWrapper.scss";

function MessagesWrapper({ children, conversation }: MessagesWrapperProps) {
  const dispatch = useAppDispatch();
  const messagesDiv = useRef<HTMLDivElement>(null);
  const { messages } = useAppSelector((state) => state.chatReducer);

  useEffect(() => {
    if (
      messagesDiv.current
        ?.getElementsByTagName("div")[0]
        .getElementsByTagName("div")[0]
    ) {
      const allMessagesDiv = messagesDiv.current
        ?.getElementsByTagName("div")[0]
        .getElementsByTagName("div")[0];

      allMessagesDiv.scrollTop = allMessagesDiv.scrollHeight;
    }
  }, [messagesDiv, messages]);

  return (
    <div
      ref={messagesDiv}
      onClick={() => {
        dispatch(searchSlice.actions.toggleFocus(false));
      }}
      className={`layouts__messages-wrapper`}
    >
      {conversation ? (
        <div>{children}</div>
      ) : (
        <div
          onClick={() => {
            dispatch(searchSlice.actions.toggleFocus(false));
          }}
        >
          No messages with current user
        </div>
      )}
    </div>
  );
}

export default MessagesWrapper;
