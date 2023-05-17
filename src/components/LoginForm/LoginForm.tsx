import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import loginFormStyles from './LoginFormStyles';

import useUser from '../../hooks/useUser/useUser';
import {globalColors} from '../../styles/colors';
import {type UserCredentials} from '../../hooks/useUser/types';

const LoginForm = (): JSX.Element => {
  const {loginUser} = useUser();

  const initialUserCredentials: UserCredentials = {
    email: '',
    password: '',
    username: '',
  };

  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials,
  );

  const handeFieldChange = (value: string, field: string) => {
    setUserCredentials({...userCredentials, [field]: value});
  };

  const onSubmitHandler = async () => {
    const isToLoginUser: UserCredentials = {
      ...userCredentials,
    };

    try {
      await loginUser(isToLoginUser);

      setUserCredentials({...initialUserCredentials});
    } catch (error) {}
  };

  const isButtonDisabled =
    userCredentials.email === '' || userCredentials.password === '';

  return (
    <KeyboardAvoidingView behavior="padding">
      <View>
        <View style={loginFormStyles.inputContainer}>
          <TextInput
            style={loginFormStyles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email address"
            accessibilityLabel="enter email address"
            value={userCredentials.email}
            onChangeText={(text) => {
              handeFieldChange(text, 'email');
            }}
          />
        </View>
        <View style={loginFormStyles.inputContainer}>
          <TextInput
            style={loginFormStyles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            secureTextEntry={true}
            textContentType="password"
            accessibilityLabel="enter password"
            value={userCredentials.password}
            onChangeText={(text) => {
              handeFieldChange(text, 'password');
            }}
          />
        </View>
        <TouchableOpacity
          style={
            isButtonDisabled
              ? loginFormStyles.buttonDisabled
              : loginFormStyles.button
          }
          activeOpacity={0.4}
          accessibilityLabel="press to log in"
          accessibilityRole="button"
          disabled={isButtonDisabled}
          onPress={onSubmitHandler}
        >
          <Text style={loginFormStyles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
