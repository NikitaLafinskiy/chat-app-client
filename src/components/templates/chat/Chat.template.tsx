import {
  Search,
  SearchResults,
  Conversations,
  MessageForm,
  Messages,
} from "components/modules";
import { useAppSelector } from "hooks/redux.hooks";
import { ProtectedRoute } from "components/elements";
import { ConversationsWrapper, MessagesWrapper } from "components/layouts";
import "./Chat.scss";

function Chat() {
  const { conversations, currentConversation } = useAppSelector(
    (state) => state.chatReducer
  );
  const { isSearching, results, error } = useAppSelector(
    (state) => state.searchReducer
  );

  return (
    <ProtectedRoute>
      <div className={`templates__chat`}>
        <ConversationsWrapper>
          <Search />
          {isSearching ? (
            <SearchResults results={results} error={error} />
          ) : (
            <Conversations conversations={conversations} />
          )}
        </ConversationsWrapper>
        <MessagesWrapper conversation={currentConversation}>
          <Messages />
          <MessageForm />
        </MessagesWrapper>
      </div>
    </ProtectedRoute>
  );
}

export default Chat;
