import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/index';
import {isReadyRef, navigationRef} from './NavigationService';
import {StyleSheet, Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
