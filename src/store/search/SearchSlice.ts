import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "types/models/IUser";
import { SearchState } from "types/redux/search";

const initialState: SearchState = {
  query: "",
  results: [],
  error: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    updateResults: (state, action: PayloadAction<IUser[]>) => {
      state.results = action.payload;
      state.error = null;
    },
    updateError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.results = [];
    },
  },
});

export const searchReducer = searchSlice.reducer;
