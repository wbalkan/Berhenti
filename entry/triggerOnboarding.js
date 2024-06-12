import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Button } from "react-native-elements";
import { CommonActions } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import TriggerModal from "./triggerModal";
import onboardingStyles from "../styles/onboardingStyles";

const TriggerOnboarding = ({ navigation }) => {
  const viceOptions = [
    { label: "Alcohol", value: "alcohol" },
    { label: "Ketamine", value: "ketamine" },
    { label: "Gambling", value: "gambling" },
    { label: "Vapes and E-Cigs", value: "vapes" },
    { label: "Other", value: "other" },
  ];

  const [vice, setVice] = useState(null);

  const triggerOptions = [
    { label: "Drinking", value: "drinking" },
    { label: "Nightlife", value: "nightlife" },
    { label: "Mealtime", value: "mealtime" },
    { label: "Friends Doing It", value: "friends" },
    { label: "Stress", value: "stress" },
    { label: "Boredom", value: "boredom" },
    { label: "Other", value: "other" },
  ];

  const [triggers, setTriggers] = useState([null]);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={{ ...onboardingStyles.container, flexGrow: 1 }}>
      <View style={onboardingStyles.headerContainer}>
        <Text style={onboardingStyles.header}>
          Tell us how you engage with your addiction.
        </Text>
      </View>
      <Text style={onboardingStyles.question}>What is your vice?</Text>
      <View style={onboardingStyles.dropdownContainer}>
        <Dropdown
          style={onboardingStyles.dropdown}
          placeholderStyle={onboardingStyles.dropdownPlaceholder}
          selectedTextStyle={onboardingStyles.dropdownSelectedText}
          placeholder="Select an option"
          data={viceOptions}
          labelField="label"
          valueField="value"
          value={vice}
          maxHeight={300}
          itemContainerStyle={onboardingStyles.dropdownItemContainer}
          itemTextStyle={onboardingStyles.dropdownItemText}
          onChange={(item) => {
            setVice(item.value);
          }}
        />
      </View>
      <Text style={onboardingStyles.question}>
        What triggers you to use your vice?
      </Text>
      <View style={onboardingStyles.dropdownContainer}>
        <Dropdown
          style={onboardingStyles.dropdown}
          placeholderStyle={onboardingStyles.dropdownPlaceholder}
          selectedTextStyle={onboardingStyles.dropdownSelectedText}
          placeholder="Select an option"
          data={triggerOptions}
          labelField="label"
          valueField="value"
          value={triggers}
          maxHeight={300}
          itemContainerStyle={onboardingStyles.dropdownItemContainer}
          itemTextStyle={onboardingStyles.dropdownItemText}
          onChange={(item) => {
            setTriggers(item.value);
          }}
        />
      </View>
      <Text style={onboardingStyles.question}>
        When are you vulnerable to using your vice, and which triggers do you
        experience during those times?
      </Text>
      <Button
        title="Add Time"
        buttonStyle={{
          backgroundColor: "#708C80",
          borderRadius: 10,
          width: 100,
          height: 40,
        }}
        titleStyle={{
          fontFamily: "Karma-Regular",
          fontSize: 15,
        }}
        containerStyle={{
          marginTop: 20,
        }}
        onPress={() => setModalVisible(true)}
      />
      <TriggerModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={onboardingStyles.submitContainer}>
        <Button
          title="Back"
          buttonStyle={{
            backgroundColor: "#E6DDCD",
            borderColor: "#708C80",
            borderRadius: 10,
            borderWidth: 1,
            width: 130,
            height: 45,
          }}
          titleStyle={{
            fontFamily: "Karma-Regular",
            color: "#708C80",
            fontSize: 18,
          }}
          containerStyle={{
            marginTop: 20,
          }}
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Submit"
          buttonStyle={{
            backgroundColor: "#708C80",
            borderRadius: 10,
            width: 130,
            height: 45,
          }}
          titleStyle={{
            fontFamily: "Karma-Regular",
            fontSize: 18,
          }}
          containerStyle={{
            marginTop: 20,
          }}
          onPress={() => navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "mainTabBar" }],
            }),
          )}
        />
      </View>
    </ScrollView>
  );
};

export default TriggerOnboarding;
