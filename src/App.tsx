import { Routes } from "pages/Routes";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { useAppDispatch, useAppSelector } from "hooks/redux.hooks";
import { socketSlice } from "store/socket/SocketSlice";
import { SocketType } from "types/socket.d";
import { initSocketListeners } from "socket/listeners";
import { useNavigate } from "react-router";
import { MainWrapper } from "components/layouts";
import { AuthActions } from "store/auth/ActionCreators";

function App() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authReducer);
  const { messages } = useAppSelector((state) => state.chatReducer);
  const nav = useNavigate();

  useEffect(() => {
    const socket: SocketType = io("http://localhost:6969");
    dispatch(socketSlice.actions.setSocket(socket));
    initSocketListeners(socket, dispatch, nav);
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      const restoreUser = async () => {
        await dispatch(AuthActions.restoreUser());
      };
      restoreUser();
    }
  }, [user]);

  return (
    <MainWrapper>
      <Routes />
    </MainWrapper>
  );
}

export default App;

// FIX A BUG: WHEN A MESSAGE IS SENT TWICE FROM DIFFERENT USERS THEY DUPLICATE
