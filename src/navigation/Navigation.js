// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/passenger/LoginScreen';
import RegisterScreen from '../screens/passenger/RegisterScreen';
import RegisterScreen1 from '../screens/driver/RegisterScreen';
import CarListScreen from '../screens/passenger/CarListScreen';
import TravelInformation from '../screens/passenger/TravelInfomation';
import ThanksScreen from '../screens/passenger/ThanksScreen';
import HomeScreen from '../screens/passenger/HomeScreen';


const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeSecreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

        <Stack.Screen name="RegisterScreen1" component={RegisterScreen1} />

        <Stack.Screen name="CarListScreen" component={CarListScreen} />
        <Stack.Screen name="TravelInformation" component={TravelInformation} />
        <Stack.Screen name="ThanksScreen" component={ThanksScreen} />
        <Stack.Screen name="HomeSecreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
