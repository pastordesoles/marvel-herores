import React from 'react';
import { Image, View } from 'react-native';
import loginScreenStyles from './LoginScreenStyles';
import LoginForm from '../../components/LoginForm/LoginForm';
import globalStyles from '../../styles/globalStyles';

const LoginScreen = (): JSX.Element => (
  <View style={globalStyles.container}>
    <View style={loginScreenStyles.contentContainer}>
      <Image
        style={loginScreenStyles.image}
        source={{
          uri: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0017/0599/brand.gif?itok=aa5cM5m6',
        }}
      />
      <LoginForm />
    </View>
  </View>
);

export default LoginScreen;
