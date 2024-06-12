import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FriendProfile from './friend_profile';
import PokeView from './PokeView';

const Stack = createStackNavigator();

const PokeTab = () => {
  return (
    <Stack.Navigator initialRouteName="PokeView">
      <Stack.Screen name="PokeView" component={PokeView} options={{ title: 'Poke View', headerShown: false }} />
      <Stack.Screen name="FriendProfile" component={FriendProfile} options={{ title: 'Friend Profile' }} />
    </Stack.Navigator>
  );
};

export default PokeTab;
