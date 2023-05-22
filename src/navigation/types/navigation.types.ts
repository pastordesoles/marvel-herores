import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import type Routes from '../StackNavigator/routes';

export type RootStackParamList = {
  [Routes.login]: undefined;
  [Routes.home]: undefined;
  [Routes.detail]: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
