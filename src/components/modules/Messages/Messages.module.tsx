import { useAppSelector } from "hooks/redux.hooks";
import { Message } from "components/elements";
import "./Messages.scss";

function Messages() {
  const { messages } = useAppSelector((state) => state.chatReducer);

  return (
    <div className='modules__messages'>
      {messages.map((message) => {
        return (
          <Message key={message.id} body={message.body} from={message.from} />
        );
      })}
    </div>
  );
}

export default Messages;
