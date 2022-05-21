import { Routes } from "pages/Routes";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { useAppDispatch } from "hooks/redux.hooks";
import { socketSlice } from "store/socket/SocketSlice";
import { screenSlice } from "store/screen/ScreenSlice";
import { SocketType } from "types/socket.d";
import { initSocketListeners } from "socket/listeners";
import { useNavigate } from "react-router";
import { MainWrapper } from "components/layouts";
import { setupInterceptors } from "./http";

function App() {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  setupInterceptors(nav);

  useEffect(() => {
    const socket: SocketType = io("https://chat-platform-server.herokuapp.com");
    dispatch(socketSlice.actions.setSocket(socket));
    initSocketListeners(socket, dispatch, nav);
  }, [dispatch]);

  useEffect(() => {
    const updateWidth = () => {
      const isMobile = window.innerWidth < 700;
      dispatch(screenSlice.actions.setAdapt(isMobile));
    };
    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [dispatch]);

  return (
    <MainWrapper>
      <Routes />
    </MainWrapper>
  );
}

export default App;
