import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Screen } from '@components/ui';
import * as SCREENS from '@screens/logged-out';

import { APP_SCREEN, LOGGED_OUT_SCREENS, type RootStackScreenProps, type LoggedOutStackParamList } from '@typings/navigators';

const Stack = createNativeStackNavigator<LoggedOutStackParamList>();

const UnauthorizedStack: React.FC<RootStackScreenProps<APP_SCREEN.LOGGED_OUT>> = () => {
  return (
    <Screen bg="primary" bottomInsetColor="white" excludeEdges={['bottom']}>
      <Stack.Navigator initialRouteName={LOGGED_OUT_SCREENS.DEFAULT} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={LOGGED_OUT_SCREENS.DEFAULT} component={SCREENS.Default} />
      </Stack.Navigator>
    </Screen>
  );
};

export default UnauthorizedStack;
