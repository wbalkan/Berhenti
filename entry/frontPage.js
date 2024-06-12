import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import Sprout from "../assets/images/Sprout";
import frontPageStyles from "../styles/frontPageStyles";

const FrontPage = ({ navigation }) => {
  return (
    <View style={frontPageStyles.container}>
      <View style={frontPageStyles.headerContainer}>
        <Text style={frontPageStyles.title}> Berhenti </Text>
      </View>
      <Text style={frontPageStyles.caption}>
        Take control of your addiction
      </Text>
      <View style={frontPageStyles.sproutContainer}>
        <Sprout width={42} height={100} />
      </View>
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
          color: "#E6DDCD",
          fontSize: 20,
        }}
        onPress={() => navigation.navigate("LoginPage")}
      />
      <Button
        title="Sign up"
        buttonStyle={{
          backgroundColor: "#E6DDCD",
          borderColor: "#708C80",
          borderWidth: 2,
          borderRadius: 10,
          width: 300,
          height: 50,
        }}
        titleStyle={{
          fontFamily: "Karma-Regular",
          color: "#708C80",
          fontSize: 20,
        }}
        containerStyle={{ marginTop: 30 }}
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
};

export default FrontPage;
