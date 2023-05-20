import React, { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import loginFormStyles from './LoginFormStyles';

import useUser from '../../hooks/useUser/useUser';

import { type UserCredentials } from '../../hooks/useUser/types';
import { globalColors } from '../../styles/colors';

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const initialUserCredentials: UserCredentials = {
    email: '',
    password: '',
    username: '',
    surname: '',
  };

  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handeFieldChange = (value: string, field: string) => {
    setUserCredentials({ ...userCredentials, [field]: value });
  };

  const onSubmitHandler = async () => {
    const isToLoginUser: UserCredentials = {
      ...userCredentials,
    };

    setIsLoading(true);

    try {
      await loginUser(isToLoginUser);

      setUserCredentials({ ...initialUserCredentials });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setModalVisible(true);
      setUserCredentials({ ...initialUserCredentials });
    }
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
            placeholder="Email "
            accessibilityLabel="Enter your email address"
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
            accessibilityLabel="Enter your password"
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
        <View>
          {isLoading && (
            <ActivityIndicator size="large" color={globalColors.accent} />
          )}
        </View>
        {!isLoading && modalVisible && (
          <Modal animationType="slide" transparent={true}>
            <View style={loginFormStyles.centeredView}>
              <View style={loginFormStyles.modalView}>
                <Text style={loginFormStyles.modalText}>
                  Incorrect email or password
                </Text>
                <Pressable
                  style={[loginFormStyles.button, loginFormStyles.buttonClose]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={loginFormStyles.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
