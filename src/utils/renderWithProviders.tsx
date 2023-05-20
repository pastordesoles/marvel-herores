import { type PreloadedState } from '@reduxjs/toolkit';
import { render } from '@testing-library/react-native';
import React, { type PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { type RootState, setupStore, store } from '../store/store';

const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>,
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({
    children,
  }: PropsWithChildren<Record<string, unknown>>): JSX.Element => (
    <Provider store={testStore}>
      <NavigationContainer>{children}</NavigationContainer>
    </Provider>
  );

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
