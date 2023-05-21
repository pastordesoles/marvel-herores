import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StatusBar } from 'react-native';
import globalStyles from '../../styles/globalStyles';
import LoginScreen from '../../Screens/LoginScreen/LoginScreen';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import { type RootStackParamList } from '../../types/navigation.types';
import Routes from './routes';
import HeroRequestProvider from '../HeroRequestProvider';
import Header from '../../components/Header/Header';
import ComicsRequestProvider from '../ComicsRequestProvider';

const StackNavigator = (): JSX.Element => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const renderHeader = (): JSX.Element => <Header />;

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Stack.Navigator
        initialRouteName={Routes.login}
        screenOptions={{ header: () => renderHeader() }}
      >
        <Stack.Screen
          component={LoginScreen}
          options={{ headerShown: false }}
          name={Routes.login}
        />
        <Stack.Screen
          component={HeroRequestProvider}
          name={Routes.home}
          options={{ headerShown: true, gestureEnabled: false }}
        />
        <Stack.Screen
          component={ComicsRequestProvider}
          name={Routes.detail}
          options={{ headerShown: true, gestureEnabled: false }}
        />
      </Stack.Navigator>
      <StatusBar barStyle={'dark-content'} />
    </SafeAreaView>
  );
};

export default StackNavigator;
