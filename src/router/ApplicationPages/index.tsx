import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import {Button} from 'react-native';
import Home from '../../pages/Application/Home';

import ViewPost from '../../pages/Application/ViewPost';

import Header from '../../components/Header';

const Stack = createStackNavigator();

export default function ApplicationPages() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,

            headerTitle: '',

            header: (props) => (
              <Header width="auto" marginLeft={17} marginTop={7} />
            ),
          }}
        />

        <Stack.Screen
          name="ViewPost"
          component={ViewPost}
          options={{
            headerShown: true,
            headerTitle: (props) => (
              <Header width="100%" marginLeft={0} marginTop={0} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
