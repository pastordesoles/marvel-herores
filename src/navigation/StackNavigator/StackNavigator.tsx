import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StatusBar} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import LoginScreen from '../../Screens/LoginScreen/LoginScreen';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import {type RootStackParamList} from '../../types/navigation.types';
import Routes from './routes';

const StackNavigator = (): JSX.Element => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Stack.Navigator initialRouteName={Routes.login}>
        <Stack.Screen
          component={LoginScreen}
          options={{headerShown: false}}
          name={Routes.login}
        />
        <Stack.Screen component={HomeScreen} name={Routes.home} />
      </Stack.Navigator>
      <StatusBar barStyle={'dark-content'} />
    </SafeAreaView>
  );
};

export default StackNavigator;
