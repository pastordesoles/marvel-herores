import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import headerStyles from './HeaderStyles';
import useUser from '../../hooks/useUser/useUser';

const Header = (): JSX.Element => {
  const { logoutUser } = useUser();
  const navigation = useNavigation();
  const route = useRoute();

  const logoutConfirmationText = 'Are you sure you want to log out?';

  const logoutAlert = () => {
    Alert.alert('Log out', logoutConfirmationText, [
      { text: 'Cancel' },
      { text: 'Log out', style: 'destructive', onPress: logoutUser },
    ]);
  };

  return (
    <View style={headerStyles.container}>
      <TouchableOpacity style={headerStyles.logoutButton} onPress={logoutAlert}>
        <Text style={headerStyles.logoutText}>Log out</Text>
      </TouchableOpacity>

      <Text style={headerStyles.title}>MARVEL</Text>
    </View>
  );
};

export default Header;
