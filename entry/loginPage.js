import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";
import Sapling from "../assets/images/Sapling";
import loginStyles from "../styles/loginStyles";
import useStore from "../store";

const LoginPage = ({ navigation }) => {
  const { userSlice } = useStore();
  const { login } = userSlice;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await login(username, password);
    if (Object.hasOwn(response, 'username')) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "mainTabBar" }],
        }),
      );
    }
  };

  return (
    <View style={loginStyles.container}>
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
        <Text style={loginStyles.header}>Log in</Text>
        <Text style={loginStyles.caption}> Please sign in to continue. </Text>
      </View>
      <TextInput
        placeholder="Username"
        style={loginStyles.inputStyle}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        style={loginStyles.inputStyle}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Login"
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
          marginTop: 10,
        }}
        onPress={handleLogin}
      />
    </View>
  );
};

export default LoginPage;
