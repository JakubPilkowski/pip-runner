import { NavigationContainer } from '@react-navigation/native';
import COLORS from 'assets/styles/COLORS';
import React, { FC, memo } from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Main from 'views/Main';
import Pip from 'views/Pip';

export type RootStackParamList = {
  Main: undefined;
  Pip: {
    uri: string;
  };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routs: FC = () => {
  return (
    <NavigationContainer fallback={<Text>Ładowanie...</Text>}>
      {/* If there is error with 'Stack.Navigator' cannot be used as a JSX component remember to check versions of @types/react in libraries
      with yarn why @types/react or npm ls @types/react */}
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerShown: false,
            title: '',
            animation: 'none',
          }}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Pip" component={Pip} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default memo(Routs);
