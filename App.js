import React  from 'react';  
import { NavigationContainer } from '@react-navigation/native';
import welcome from './components/welcome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signupscreen from './components/signup';
import loginScreen from './components/loginpage';
import mainscreen from './components/mainpage';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen name="welcome" component={welcome} />
        <Stack.Screen name="login" component={loginScreen} />
        <Stack.Screen name="signup" component={Signupscreen} />
       <Stack.Screen name="mainscreen" component={mainscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}