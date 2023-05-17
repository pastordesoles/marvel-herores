import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {type User} from '../../store/features/userSlice/types';
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from '../../store/features/userSlice/userSlice';
import {useAppDispatch} from '../../store/hooks';
import loginData from './loginData.json';
import {type UserCredentials} from './types';
import Routes from '../../navigation/StackNavigator/routes';
import {type NavigationProps} from '../../types/navigation.types';

const useUser = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProps>();

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const {username, password, email, surname} = loginData as UserCredentials;
      if (
        password === userCredentials.password &&
        email === userCredentials.email
      ) {
        const loggedUser: User = {
          email,
          username,
        };

        dispatch(loginUserActionCreator(loggedUser));

        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('surname', surname);
        await AsyncStorage.setItem('email', email);
      }

      navigation.navigate(Routes.home);
    } catch (error) {
      throw new Error('Username, password or email are incorrect');
    }
  };

  const logoutUser = async () => {
    dispatch(logoutUserActionCreator());
    await AsyncStorage.removeItem('username');
    await AsyncStorage.removeItem('surname');
    await AsyncStorage.removeItem('email');
  };

  return {loginUser, logoutUser};
};

export default useUser;
