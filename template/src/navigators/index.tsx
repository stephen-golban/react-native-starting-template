import React from 'react';

import { useAppStore } from '@store/app';

import RootNavigator from './core';
import { ActivityIndicator, View } from '@components/common';
import { NavigationContainer } from '@react-navigation/native';

const ApplicationNavigator = () => {
  const _hasHydrated = useAppStore.persist.hasHydrated();

  if (!_hasHydrated) {
    return (
      <View center absoluteFill bg="zodiac_blue" zIndex={999}>
        <ActivityIndicator color="error" size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
