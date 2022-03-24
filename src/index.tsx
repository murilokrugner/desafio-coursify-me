import 'react-native-gesture-handler';

import React from 'react';

import {StatusBar, LogBox} from 'react-native';

import colors from './global/styles/colors';

import App from './App';

import './config/ReactotronConfig';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const index: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />

      <App />
    </>
  );
};

export default index;
