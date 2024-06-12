import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import FrontPage from "./frontPage";
import SignUpPage from "./signUpPage.js";
import LoginPage from "./loginPage.js";
import TriggerOnboarding from "./triggerOnboarding.js";
import Introduction from "./introduction.js";
import MainTabBar from "../navigation/main_tab_bar.js";

const Stack = createStackNavigator();

export const navigationRef = React.createRef();

const FrontScreen = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRoutename="Introduction"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Introduction" component={Introduction} />
        <Stack.Screen name="FrontPage" component={FrontPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="triggerOnboarding" component={TriggerOnboarding} />
        <Stack.Screen name="mainTabBar" component={MainTabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FrontScreen;
