import { ConversationsProps } from "types/components/modules.d";
import { SingleConversation } from "components/elements";

function Conversations({ conversations }: ConversationsProps) {
  if (conversations.length !== 0) {
    return (
      <div className={`modules__conversation_populated`}>
        {conversations.map((conversation) => {
          return (
            <SingleConversation
              isPrivate={conversation.isPrivate}
              conversation={conversation}
              key={conversation.id}
            >
              {conversation.name}
            </SingleConversation>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`modules__conversation_empty`}>
      Add a friend to start chatting!
    </div>
  );
}

export default Conversations;
