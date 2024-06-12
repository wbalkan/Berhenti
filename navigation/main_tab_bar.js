import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import FeedTab from "./feed_tab";
import ProfileTab from "./profile_tab";
import TreeView from "./tree_view";
import PokeTab from "./poke_tab";
import LoggingTab from "./logging";

const Tab = createBottomTabNavigator();

const MainTabBar = () => {
  return (
    <NavigationContainer independent>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            // Customize the icon we display based on the tab route
            if (route.name === "Feed") {
              iconName = "list";
            } else if (route.name === "myProfile") {
              iconName = "person";
            } else if (route.name === "Tree") {
              iconName = "leaf";
            } else if (route.name === "Poke") {
              iconName = "alert";
            } else if (route.name === "Logging") {
              iconName = "book";
            }
            // Return the respective icon
            return (
              <Ionicons
                name={iconName}
                size={26}
                color={focused ? "#58AADA" : "grey"}
              />
            );
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Feed" component={FeedTab} />
        <Tab.Screen name="myProfile" component={ProfileTab} />
        <Tab.Screen name="Tree" component={TreeView} />
        <Tab.Screen name="Poke" component={PokeTab} />
        <Tab.Screen name="Logging" component={LoggingTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabBar;
