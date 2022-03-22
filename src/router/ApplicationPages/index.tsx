import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../pages/Application/Home';
import Header from '../../components/Header';

const Stack = createStackNavigator();

export default function ApplicationPages() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {elevation: 0},
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerTitle: '',
            header: (props) => <Header />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
