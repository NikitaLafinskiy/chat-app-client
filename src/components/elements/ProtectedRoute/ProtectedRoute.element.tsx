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
    if (!localStorage.getItem("refreshUUID")) {
      nav("/register");
    } else if (
      localStorage.getItem("accessUUID") &&
      localStorage.getItem("refreshUUID") &&
      user
    ) {
      dispatch(ChatActions.getConversations(user.id));
      return;
    } else if (
      (localStorage.getItem("refreshUUID") && !user) ||
      !localStorage.getItem("accessUUID")
    ) {
      try {
        (async () => {
          await dispatch(AuthActions.restoreUser(nav));
        })();
      } catch (err) {
        nav("/register");
      }
    }
  }, [user]);

  return <div>{children}</div>;
}

export default ProtectedRoute;
