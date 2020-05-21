import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SigninForm from '../pages/Signin';
import SignupForm from '../pages/Signup';
import HomePage from '../pages/Home/HomePage';
import Application from '../pages/Application/Application';
import Content from '../pages/Home/DrawerContent';

const Stack = createStackNavigator();

function Router() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={SigninForm} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={SignupForm} options={{headerShown: false}} />
        <Stack.Screen name="Dashboard" component={Content} />
        <Stack.Screen name="Application" component={Application} options={{headerShown: false}} />
      </Stack.Navigator>
  );
}

export default Router;