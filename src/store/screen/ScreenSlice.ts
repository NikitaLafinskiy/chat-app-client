import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScreenState } from "types/redux/screen.d";

const initialState: ScreenState = {
  isMobile: false,
};

export const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setAdapt(state, action: PayloadAction<boolean>) {
      state.isMobile = action.payload;
    },
  },
});

export const screenReducer = screenSlice.reducer;
