import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import SignupScreen from '../screens/SignupScreen';

const Tab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Login';

export default function LoginNavigtaion({navigation, route}){

  return (
    <Tab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
        <Tab.Screen name="Signup" component={SignupScreen}/>
    </Tab.Navigator>
  )
}