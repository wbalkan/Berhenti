import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import Clouds from "../assets/images/clouds";
import introductionStyles from "../styles/introductionStyles";

const Introduction = ({ navigation }) => {
  return (
    <View style={introductionStyles.container}>
      <LinearGradient
        colors={["#BBCED1", "#E6DDCD"]}
        style={introductionStyles.background}
      >
        <View style={introductionStyles.cloudContainer}>
          <Clouds width={393} height={432} />
        </View>
        <View style={introductionStyles.content}>
          <Text style={introductionStyles.title}>
            Curbing Addiction Together
          </Text>
          <Text style={introductionStyles.caption}>
            {" "}
            Berhenti is a mobile platform designed to help you and your partners
            recover from addiction through mutual accountability during periods
            where you are vulnerable to relapsing.
          </Text>
          <Button
            title="Get Started"
            buttonStyle={{
              backgroundColor: "#708C80",
              borderRadius: 10,
              width: 150,
              height: 50,
            }}
            titleStyle={{
              fontFamily: "Karma-Regular",
              fontSize: 20,
            }}
            containerStyle={{
              marginTop: 40,
              marginLeft: 30,
              alignSelf: "flex-end",
            }}
            onPress={() => navigation.navigate("FrontPage")}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Introduction;
