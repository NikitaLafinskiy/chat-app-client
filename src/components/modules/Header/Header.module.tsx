import { Button, Header as H1 } from "components/elements";
import { HeaderProps } from "types/components/modules";
import { useAppSelector, useAppDispatch } from "hooks/redux.hooks";
import { chatSlice } from "store/chat/ChatSlice";
import "./Header.scss";
import { ElementHelpers } from "utils/elements/ElementsHelpers";
import { IUser } from "types/models/IUser";

function Header({ text }: HeaderProps) {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authReducer);
  const handleBack = () => {
    dispatch(chatSlice.actions.setCurrentConversation(null));
  };

  const name = ElementHelpers.revertPmGroupName(user as IUser, text);

  return (
    <div className={`modules__header`}>
      <Button onClick={handleBack}>
        <img src={`/images/go_back.svg`} />
      </Button>
      <H1>{name}</H1>
    </div>
  );
}

export default Header;
