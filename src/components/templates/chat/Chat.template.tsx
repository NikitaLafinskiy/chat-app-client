import { Search } from "components/modules";
import { useAppSelector, useAppDispatch } from "hooks/redux.hooks";
import { useEffect } from "react";
import { AuthActions } from "store/auth/ActionCreators";

function Chat() {
  const { user } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(user);
    if (!user) {
      const restoreUser = async () => {
        await dispatch(AuthActions.restoreUser());
      };

      restoreUser();
    }
  }, [user]);

  return (
    <div>
      <Search />
    </div>
  );
}

export default Chat;
