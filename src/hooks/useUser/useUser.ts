import { useNavigation } from '@react-navigation/native';
import { type User } from '../../store/features/userSlice/types';
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from '../../store/features/userSlice/userSlice';
import { useAppDispatch } from '../../store/hooks';
import loginData from './loginData.json';
import { type UserDataPersistance, type UserCredentials } from './types';
import Routes from '../../navigation/StackNavigator/routes';
import { type NavigationProps } from '../../navigation/types/navigation.types';
import userStorage from './utils/userStorage';

const useUser = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProps>();

  const loginUser = async (userCredentials: UserCredentials) => {
    await new Promise((resolve, reject) => {
      const { userName, password, email, surname } =
        loginData as UserCredentials;
      if (
        password === userCredentials.password &&
        email === userCredentials.email
      ) {
        const loggedUser: User = {
          email,
          userName,
        };

        dispatch(loginUserActionCreator(loggedUser));
        const userDataToPersist: UserDataPersistance = {
          userName,
          surname,
          email,
        };

        userStorage.storeItem(userDataToPersist).catch((error) => {
          throw new Error('Error storing user data');
        });

        resolve(loggedUser);

        navigation.navigate(Routes.home);
      } else {
        throw new Error('Username, password or email are incorrect');
      }
    });
  };

  const logoutUser = async () => {
    dispatch(logoutUserActionCreator());

    const dataToRemove = ['userName', 'surname', 'email'];

    userStorage.removeItem(dataToRemove).catch((error) => {
      throw new Error('Error removing user data');
    });

    navigation.navigate(Routes.login);
  };

  return { loginUser, logoutUser };
};

export default useUser;
