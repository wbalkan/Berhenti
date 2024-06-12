import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import profileStyles from "../styles/profileStyles";

const TriggerItem = ({ title, message, time }) => {
  const formattedTime = new Date(time).toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <TouchableOpacity style={profileStyles.triggerItem}>
      <View style={profileStyles.triggerItemContent}>
        <Text style={profileStyles.triggerItemText}>{title}</Text>
        <Text style={profileStyles.triggerMessageText}>{message}</Text>
      </View>
      <View style={profileStyles.triggerTime}>
        <Text style={profileStyles.triggerTimeText}>{formattedTime}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TriggerItem;
