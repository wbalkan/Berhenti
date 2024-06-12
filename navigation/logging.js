import React, { useState, useRef } from "react";
import { View, Text, TextInput, Keyboard } from "react-native";
import { Button } from "react-native-elements";
import { Dropdown } from "react-native-element-dropdown";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import loggingStyles from "../styles/loggingStyles";

import useStore from "../store";

const LoggingTab = ({ navigation }) => {
  const { userSlice, triggerSlice, relapseSlice } = useStore();

  const { user } = userSlice;
  const { createTrigger } = triggerSlice;
  const { createRelapse } = relapseSlice;
  const logOption = [
    { label: "Overcame a trigger", value: "Overcame a trigger" },
    { label: "Relapsed", value: "Relapsed" },
    { label: "Need Support", value: "Need Support" },
  ];

  const [log, setLog] = useState(null);
  const [logText, setLogText] = useState('');

  const inputRef = useRef();
  const [inputFocused, setInputFocused] = useState(false);

  const rendeDropdown = () => {
    return (
      <Dropdown
        style={loggingStyles.dropdown}
        placeholderStyle={loggingStyles.dropdownPlaceholder}
        selectedTextStyle={loggingStyles.dropdownSelectedText}
        placeholder="Select an option"
        data={logOption}
        labelField="label"
        valueField="value"
        value={log}
        maxHeight={200}
        itemContainerStyle={loggingStyles.dropdownItemContainer}
        itemTextStyle={loggingStyles.dropdownItemText}
        onChange={(item) => {
          setLog(item.value);
        }}
      />
    );
  };

  return (
    <View style={loggingStyles.container}>
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
        <View style={loggingStyles.headerContainer}>
          <Text style={loggingStyles.header}> Log Activity </Text>
        </View>
        <Text style={loggingStyles.caption}> What are you logging? </Text>
      </TouchableWithoutFeedback>
      { inputFocused
        ? (
          <TouchableWithoutFeedback style={loggingStyles.dropdownTouchable} onPress={() => { Keyboard.dismiss(); }}>
            <View style={loggingStyles.dropdownContainer}>
              {rendeDropdown()}
            </View>
          </TouchableWithoutFeedback>
        )
        : (
          <View style={loggingStyles.dropdownContainer}>
            {rendeDropdown()}
          </View>
        )}
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
        <Text style={loggingStyles.caption}>
          Let your partners know what’s on your mind.
        </Text>
        <TextInput
          style={loggingStyles.textInput}
          ref={inputRef}
          placeholder="Start typing here..."
          multiline
          numberOfLines={8}
          value={logText}
          onChangeText={setLogText}
          onFocus={() => { setInputFocused(true); }}
          onBlur={() => { setInputFocused(false); }}
        />
      </TouchableWithoutFeedback>

      <View style={loggingStyles.submitContainer}>
        <Button
          title="Reset"
          buttonStyle={{
            backgroundColor: "#E6DDCD",
            borderRadius: 10,
            width: 120,
            height: 45,
            borderWidth: 2,
            borderColor: "#708C80",
          }}
          titleStyle={{
            fontFamily: "Karma-Regular",
            color: "#708C80",
            fontSize: 18,
          }}
          containerStyle={{
            marginTop: 20,
          }}
          onPress={() => {
            setLogText("");
            setLog(null);
          }}
        />
        <Button
          title="Log Activity"
          buttonStyle={{
            backgroundColor: "#708C80",
            borderRadius: 10,
            width: 120,
            height: 45,
          }}
          titleStyle={{
            fontFamily: "Karma-Regular",
            color: "#E6DDCD",
            fontSize: 18,
          }}
          containerStyle={{
            marginTop: 20,
          }}
          onPress={async () => {
            console.log(log);
            if (log === "Overcame a trigger" || log === "Need Support") {
              await createTrigger(user._id, {
                userId: user._id,
                title: log,
                message: logText,
                time: new Date(),
              });
            } else if (log === "Relapsed") {
              await createRelapse(user._id, {
                userId: user._id,
                reason: logText,
                time: new Date(),
              });
            }
            setLogText("");
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

export default LoggingTab;
