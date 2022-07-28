import { useAppSelector } from "hooks/redux.hooks";
import { lazy, Suspense } from "react";
import "./Messages.scss";

const Message = lazy(() =>
  import("components/elements").then((module) => ({ default: module.Message }))
);

function Messages() {
  const { messages } = useAppSelector((state) => state.chatReducer);
  const { isMobile } = useAppSelector((state) => state.screenReducer);

  return (
    <div className={`modules__messages${isMobile ? "__mobile" : ""}`}>
      {messages.map((message) => {
        return (
          <Suspense fallback={<div id='__loading'>Loading messages...</div>}>
            <Message key={message.id} body={message.body} from={message.from} />
          </Suspense>
        );
      })}
    </div>
  );
}

export default Messages;
