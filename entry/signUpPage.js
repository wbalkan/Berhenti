import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import Sapling from "../assets/images/Sapling";
import loginStyles from "../styles/loginStyles";
import useStore from '../store';

const SignUpPage = ({ navigation }) => {
  const createUser = useStore(({ userSlice }) => userSlice.createUser);
  const [stateUsername, setUsername] = useState('');
  const [statePassword, setPassword] = useState('');

  const { userSlice } = useStore();
  const { user } = userSlice;

  return (
    <ScrollView contentContainerStyle={loginStyles.container}>
      <TouchableOpacity
        style={loginStyles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#708C80" />
      </TouchableOpacity>
      <View style={loginStyles.logoContainer}>
        <Sapling width={170} height={150} />
      </View>
      <View style={loginStyles.headerContainer}>
        <Text style={loginStyles.header}>Sign Up</Text>
        <Text style={loginStyles.caption}>
          {" "}
          Enter your username and password.
          {" "}
        </Text>
      </View>
      <TextInput
        placeholder="Username"
        onChangeText={(username) => setUsername(username)}
        value={stateUsername}
        style={loginStyles.inputStyle}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
        value={statePassword}
        style={loginStyles.inputStyle}
        secureTextEntry
      />
      <Button
        title="Sign up"
        buttonStyle={{
          backgroundColor: "#708C80",
          borderRadius: 10,
          width: 300,
          height: 50,
        }}
        titleStyle={{
          fontFamily: "Karma-Regular",
          fontSize: 20,
        }}
        containerStyle={{
          marginTop: 20,
        }}
        onPress={async () => {
          const newUser = { username: stateUsername, password: statePassword };
          const response = await createUser(newUser);
          if (Object.hasOwn(response, 'username')) {
            navigation.navigate("triggerOnboarding");
          }
        }}
      />
    </ScrollView>
  );
};

export default SignUpPage;
