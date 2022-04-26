import { Search, SearchResults } from "components/modules";
import { useAppSelector, useAppDispatch } from "hooks/redux.hooks";
import { useEffect } from "react";
import { ChatActions } from "store/chat/ActionCreators";
import { Conversations, MessageForm, Messages } from "components/modules";
import { ConversationsWrapper, MessagesWrapper } from "components/layouts";
import "./Chat.scss";

function Chat() {
  const { user } = useAppSelector((state) => state.authReducer);
  const { conversations, currentConversation } = useAppSelector(
    (state) => state.chatReducer
  );
  const { isSearching, results, error } = useAppSelector(
    (state) => state.searchReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(ChatActions.getConversations(user.id));
      return;
    }
  }, [user]);

  return (
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
  );
}

export default Chat;
