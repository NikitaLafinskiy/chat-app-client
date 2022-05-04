import { ProtectedRouteProps } from "types/components/elements.d";
import { useAppDispatch, useAppSelector } from "hooks/redux.hooks";
import { useEffect } from "react";
import { ChatActions } from "store/chat/ActionCreators";
import { useNavigate } from "react-router";
import { AuthActions } from "store/auth/ActionCreators";

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      nav("/register");
    } else if (localStorage.getItem("token") && user) {
      dispatch(ChatActions.getConversations(user.id));
      return;
    } else if (localStorage.getItem("token") && !user) {
      try {
        const restoreUser = async () => {
          await dispatch(AuthActions.restoreUser());
        };
        restoreUser();
      } catch (err) {
        nav("/register");
      }
    }
  }, [user]);

  return <div>{children}</div>;
}

export default ProtectedRoute;
