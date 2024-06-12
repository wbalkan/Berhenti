import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { Dropdown } from "react-native-element-dropdown";
import triggerModalStyles from "../styles/triggerModalStyles";

const TriggerModal = ({ modalVisible, setModalVisible }) => {
  const startTime = [
    { label: "12:00 AM", value: "12:00 AM" },
    { label: "1:00 AM", value: "1:00 AM" },
    { label: "2:00 AM", value: "2:00 AM" },
    { label: "3:00 AM", value: "3:00 AM" },
    { label: "4:00 AM", value: "4:00 AM" },
    { label: "5:00 AM", value: "5:00 AM" },
    { label: "6:00 AM", value: "6:00 AM" },
    { label: "7:00 AM", value: "7:00 AM" },
    { label: "8:00 AM", value: "8:00 AM" },
    { label: "9:00 AM", value: "9:00 AM" },
    { label: "10:00 AM", value: "10:00 AM" },
    { label: "11:00 AM", value: "11:00 AM" },
    { label: "12:00 PM", value: "12:00 PM" },
    { label: "1:00 PM", value: "1:00 PM" },
    { label: "2:00 PM", value: "2:00 PM" },
    { label: "3:00 PM", value: "3:00 PM" },
    { label: "4:00 PM", value: "4:00 PM" },
    { label: "5:00 PM", value: "5:00 PM" },
    { label: "6:00 PM", value: "6:00 PM" },
    { label: "7:00 PM", value: "7:00 PM" },
    { label: "8:00 PM", value: "8:00 PM" },
    { label: "9:00 PM", value: "9:00 PM" },
    { label: "10:00 PM", value: "10:00 PM" },
    { label: "11:00 PM", value: "11:00 PM" },
  ];

  const [selectedStartTime, setSelectedStartTime] = useState(null);

  const endTime = [
    { label: "12:00 AM", value: "12:00 AM" },
    { label: "1:00 AM", value: "1:00 AM" },
    { label: "2:00 AM", value: "2:00 AM" },
    { label: "3:00 AM", value: "3:00 AM" },
    { label: "4:00 AM", value: "4:00 AM" },
    { label: "5:00 AM", value: "5:00 AM" },
    { label: "6:00 AM", value: "6:00 AM" },
    { label: "7:00 AM", value: "7:00 AM" },
    { label: "8:00 AM", value: "8:00 AM" },
    { label: "9:00 AM", value: "9:00 AM" },
    { label: "10:00 AM", value: "10:00 AM" },
    { label: "11:00 AM", value: "11:00 AM" },
    { label: "12:00 PM", value: "12:00 PM" },
    { label: "1:00 PM", value: "1:00 PM" },
    { label: "2:00 PM", value: "2:00 PM" },
    { label: "3:00 PM", value: "3:00 PM" },
    { label: "4:00 PM", value: "4:00 PM" },
    { label: "5:00 PM", value: "5:00 PM" },
    { label: "6:00 PM", value: "6:00 PM" },
    { label: "7:00 PM", value: "7:00 PM" },
    { label: "8:00 PM", value: "8:00 PM" },
    { label: "9:00 PM", value: "9:00 PM" },
    { label: "10:00 PM", value: "10:00 PM" },
    { label: "11:00 PM", value: "11:00 PM" },
  ];

  const [selectedEndTime, setSelectedEndTime] = useState(null);

  const triggerOptions = [
    { label: "Drinking", value: "drinking" },
    { label: "Nightlife", value: "nightlife" },
    { label: "Mealtime", value: "mealtime" },
    { label: "Friends Doing it", value: "friends" },
    { label: "Stress", value: "stress" },
    { label: "Boredom", value: "boredom" },
    { label: "Anxiety", value: "anxiety" },
    { label: "Other", value: "other" },
  ];

  const [trigger, setTrigger] = useState(null);

  const days = ["M", "T", "W", "Th", "F", "Sa", "Su"];

  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={triggerModalStyles.centeredView}>
        <View style={triggerModalStyles.modalView}>
          <Text style={triggerModalStyles.header}>Add Day </Text>
          <Text style={triggerModalStyles.modalText}>
            Select any day you experience a trigger.
          </Text>
          <View style={triggerModalStyles.dayContainer}>
            {days.map((day, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  triggerModalStyles.circle,
                  selectedDay === index && triggerModalStyles.selectedCircle,
                ]}
                onPress={() => setSelectedDay(index)}
              >
                <Text style={triggerModalStyles.modalText}>{day}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={triggerModalStyles.modalText}>
            Enter the time you experience this trigger on this day.
          </Text>
          <View style={triggerModalStyles.timeContainer}>
            <View>
              <Text style={triggerModalStyles.modalText}>Start:</Text>
              <View style={triggerModalStyles.dropdownContainer}>
                <Dropdown
                  style={triggerModalStyles.dropdown}
                  placeholderStyle={triggerModalStyles.dropdownPlaceholder}
                  selectedTextStyle={triggerModalStyles.dropdownSelectedText}
                  placeholder="12:00 AM"
                  data={startTime}
                  labelField="label"
                  valueField="value"
                  value={selectedStartTime}
                  maxHeight={200}
                  itemContainerStyle={triggerModalStyles.dropdownItemContainer}
                  itemTextStyle={triggerModalStyles.dropdownItemText}
                  onChange={(item) => {
                    setSelectedStartTime(item.value);
                  }}
                />
              </View>
            </View>
            <View>
              <Text style={triggerModalStyles.modalText}>End:</Text>
              <View style={triggerModalStyles.dropdownContainer}>
                <Dropdown
                  style={triggerModalStyles.dropdown}
                  placeholderStyle={triggerModalStyles.dropdownPlaceholder}
                  selectedTextStyle={triggerModalStyles.dropdownSelectedText}
                  placeholder="12:00 AM"
                  data={endTime}
                  labelField="label"
                  valueField="value"
                  value={selectedEndTime}
                  maxHeight={200}
                  itemContainerStyle={triggerModalStyles.dropdownItemContainer}
                  itemTextStyle={triggerModalStyles.dropdownItemText}
                  onChange={(item) => {
                    setSelectedEndTime(item.value);
                  }}
                />
              </View>
            </View>
          </View>
          <Text style={triggerModalStyles.modalText}>
            Which of your triggers do you commonly feel during this time?
          </Text>
          <View style={triggerModalStyles.bigDropdownContainer}>
            <Dropdown
              style={triggerModalStyles.dropdown}
              placeholderStyle={triggerModalStyles.dropdownPlaceholder}
              selectedTextStyle={triggerModalStyles.dropdownSelectedText}
              placeholder="Select Trigger"
              data={triggerOptions}
              labelField="label"
              valueField="value"
              value={trigger}
              maxHeight={200}
              itemContainerStyle={triggerModalStyles.dropdownItemContainer}
              itemTextStyle={triggerModalStyles.dropdownItemText}
              onChange={(item) => {
                setTrigger(item.value);
              }}
            />
          </View>
          <View style={triggerModalStyles.buttonContainer}>
            <Button
              title="Reset"
              buttonStyle={{
                backgroundColor: "#E6DDCD",
                borderColor: "#708C80",
                borderRadius: 10,
                borderWidth: 2,
                width: 120,
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
              onPress={() => setModalVisible(!modalVisible)}
            />
            <Button
              title="Save"
              buttonStyle={{
                backgroundColor: "#708C80",
                borderRadius: 10,
                width: 120,
                height: 45,
              }}
              titleStyle={{
                fontFamily: "Karma-Regular",
                fontSize: 18,
              }}
              containerStyle={{
                marginTop: 20,
              }}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TriggerModal;
