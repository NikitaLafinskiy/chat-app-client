import { Routes } from 'pages/Routes';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useAppDispatch } from 'hooks/redux.hooks';
import { socketSlice } from 'store/socket/SocketSlice';
import { SocketType } from 'types/socket.d';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const socket: SocketType = io('http://localhost:6969');
    dispatch(socketSlice.actions.setSocket(socket));
  }, [dispatch]);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;

//TODO
// Build a components that is going to redirect the user if he is not logged in (if the access token isnt populated in the localStorage)
// handle the $api requests as well as refreshing the token
//  create a chat component and the register/login pages
