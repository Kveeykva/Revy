import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Router from "./src/router/Router";
import React from "react";
import { Provider } from "react-redux";
import Store from "./src/redux/store";

const App = () => (
  <Provider store={Store}>
    <View style={{ flex: 1 }}>
      <Router />
      <StatusBar style="light" translucent={false} />
    </View>
  </Provider>
);

export default App;
