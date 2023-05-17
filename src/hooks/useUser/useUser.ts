import AsyncStorage from '@react-native-async-storage/async-storage';
import {type User} from '../../store/features/userSlice/types';
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from '../../store/features/userSlice/userSlice';
import {useAppDispatch} from '../../store/hooks';
import loginData from './loginData.json';
import {type userCredentials} from './types';

const useUser = () => {
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: userCredentials) => {
    try {
      const {username, password, email} = loginData as userCredentials;
      if (
        username === userCredentials.username &&
        password === userCredentials.password &&
        email === userCredentials.email
      ) {
        const loggedUser: User = {
          email,
          username,
        };

        dispatch(loginUserActionCreator(loggedUser));

        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('email', email);
      }
    } catch (error) {
      throw new Error('Username, password or email are incorrect');
    }
  };

  const logoutUser = async () => {
    dispatch(logoutUserActionCreator());
    await AsyncStorage.removeItem('username');
    await AsyncStorage.removeItem('email');
  };

  return {loginUser, logoutUser};
};

export default useUser;
