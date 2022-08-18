import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/AuthSlice";
import { socketReducer } from "./socket/SocketSlice";
import { searchReducer } from "./search/SearchSlice";
import { chatReducer } from "./chat/ChatSlice";
import { screenReducer } from "./screen/ScreenSlice";

export const reducer = combineReducers({
  authReducer,
  socketReducer,
  searchReducer,
  chatReducer,
  screenReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const setupStore = () => {
  return store;
};

export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
