import React, { useState, useEffect } from "react";
import { LogBox, Text } from "react-native";
import * as Font from "expo-font";
import FrontScreen from "./entry/frontScreen";

// Disable really annoying in app warnings
LogBox.ignoreAllLogs();

const loadFonts = async () => {
  await Font.loadAsync({
    "Karma-Light": require("./assets/fonts/Karma-Light.ttf"),
    "Karma-Regular": require("./assets/fonts/Karma-Regular.ttf"),
    "Karma-Medium": require("./assets/fonts/Karma-Medium.ttf"),
    "Karma-SemiBold": require("./assets/fonts/Karma-SemiBold.ttf"),
    "Karma-Bold": require("./assets/fonts/Karma-Bold.ttf"),
  });
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <Text> Loading... </Text>;
  }

  return <FrontScreen />;
};

export default App;
