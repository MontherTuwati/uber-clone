import { NativeWindStyleSheet } from "nativewind";
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <HomeScreen/>
      </View>
    </Provider>
  );
}