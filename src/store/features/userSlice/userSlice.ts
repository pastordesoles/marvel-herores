import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {type User, type UserState} from './types';

const initialState: UserState = {
  email: '',
  isLogged: false,
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (currentState, action: PayloadAction<User>): UserState => ({
      ...currentState,
      email: action.payload.email,
      username: action.payload.username,
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
