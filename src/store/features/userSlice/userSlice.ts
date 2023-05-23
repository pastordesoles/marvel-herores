import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type User, type UserState } from './types';

const initialState: UserState = {
  email: '',
  isLogged: false,
  userName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (currentState, action: PayloadAction<User>): UserState => ({
      ...currentState,
      email: action.payload.email,
      userName: action.payload.userName,
      isLogged: true,
    }),

    logoutUser: (): UserState => ({
      ...initialState,
    }),
  },
});

export const userReducer = userSlice.reducer;

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
