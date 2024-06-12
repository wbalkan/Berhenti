import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FriendView from "./friend_view";
import Settings from "./settings";
import Profile from "./profile";
import AddFriend from "./add_friend";
import FriendProfile from "./friend_profile";

const Stack = createStackNavigator();

const ProfileTab = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile", headerShown: false }}
      />
      <Stack.Screen
        name="FriendView"
        component={FriendView}
        options={{ title: "Friends" }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Settings" }}
      />
      <Stack.Screen
        name="AddFriend"
        component={AddFriend}
        options={{ title: "Add Friends" }}
      />
      <Stack.Screen
        name="FriendProfile"
        component={FriendProfile}
        options={{ title: "Friend Profile" }}
      />
    </Stack.Navigator>
  );
};

export default ProfileTab;
