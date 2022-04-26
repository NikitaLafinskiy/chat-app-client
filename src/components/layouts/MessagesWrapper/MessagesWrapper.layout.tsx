import { useAppDispatch } from "hooks/redux.hooks";
import { searchSlice } from "store/search/SearchSlice";
import { MessagesWrapperProps } from "types/components/layouts.d";
import "./MessagesWrapper.scss";

function MessagesWrapper({ children, conversation }: MessagesWrapperProps) {
  const dispatch = useAppDispatch();

  if (!conversation) {
    return (
      <div
        onClick={() => {
          dispatch(searchSlice.actions.toggleFocus(false));
        }}
      >
        No messages with current user
      </div>
    );
  }

  return (
    <div className={`layouts__messages-wrapper`}>
      <div
        onClick={() => {
          dispatch(searchSlice.actions.toggleFocus(false));
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default MessagesWrapper;
