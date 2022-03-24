import Reactotron from 'reactotron-react-native';

declare global {
  interface Console {
    tron: any;
  }
}

if (__DEV__) {
  const tron = Reactotron.configure({host: '192.168.2.110'})
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear!();
}