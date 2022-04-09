import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from 'types/redux/auth.d';
import { IUser } from 'types/models/IUser.d';

const initialState: AuthState = {
  user: null,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
      state.error = '';
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
