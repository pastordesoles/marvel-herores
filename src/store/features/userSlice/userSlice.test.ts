import { type UserState, type User } from './types';
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from './userSlice';

describe('Given a userReducer', () => {
  const initialState: UserState = {
    email: '',
    isLogged: false,
    userName: '',
  };

  describe('When it receives the initial state and a login user action with a new user', () => {
    test('Then it should return the state with the users credentials and isLogged true', () => {
      const currentState: UserState = {
        ...initialState,
      };

      const user: User = {
        email: 'admin@gmail.com',
        userName: 'Admin',
      };

      const expectedNewState: UserState = {
        email: user.email,
        userName: user.userName,
        isLogged: true,
      };

      const loginUserAction = loginUserActionCreator(user);
      const newState = userReducer(currentState, loginUserAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });

  describe('When it receives a state with a logged in user and a logout action', () => {
    test('Then it should return a state with no user credentials and isLogged false', () => {
      const currentState: UserState = {
        email: 'admin@gmail.com',
        userName: 'Admin',
        isLogged: true,
      };

      const logoutUserAction = logoutUserActionCreator();
      const newState = userReducer(currentState, logoutUserAction);

      expect(newState).toStrictEqual(initialState);
    });
  });
});
