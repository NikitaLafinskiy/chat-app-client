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

function App() {
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  useEffect(() => {
    // const socket: SocketType = io("https://chat-platform-server.herokuapp.com");
    const socket: SocketType = io("http://localhost:6969");
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
