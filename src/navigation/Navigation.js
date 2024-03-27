// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AdditionalDetails from '../screens/passenger/AdditionalDetails';
import LoginScreen from '../screens/passenger/LoginScreen';
import RegisterScreen from '../screens/passenger/RegisterScreen';
import OTPScreen from '../screens/passenger/OTPScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OTPScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="AdditionalDetails" component={AdditionalDetails} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
