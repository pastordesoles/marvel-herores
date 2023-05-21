import React from 'react';
import { Text, View, TouchableOpacity, Alert, Image } from 'react-native';
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
    <>
      {route.name === 'home' ? (
        <View style={headerStyles.container}>
          <TouchableOpacity
            style={headerStyles.logoutButton}
            onPress={logoutAlert}
          >
            <Text style={headerStyles.logoutText}>Log out</Text>
          </TouchableOpacity>
          <Image
            style={headerStyles.image}
            resizeMode="contain"
            testID="HEROES"
            source={{
              uri: 'https://i.pinimg.com/originals/06/59/ee/0659ee4a07929a77ea29da8b6d996754.jpg',
            }}
          />
        </View>
      ) : (
        <View style={headerStyles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={headerStyles.logoutButton}
          >
            <Text style={headerStyles.logoutText}>Back</Text>
          </TouchableOpacity>
          <Image
            style={headerStyles.image}
            resizeMode="contain"
            testID="HEROES"
            source={{
              uri: 'https://i.pinimg.com/originals/06/59/ee/0659ee4a07929a77ea29da8b6d996754.jpg',
            }}
          />
          <TouchableOpacity style={headerStyles.back} onPress={logoutAlert}>
            <Text style={headerStyles.logoutText}>Log out</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Header;
