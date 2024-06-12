import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import common from "../styles/commonStyles";
import profileStyles from "../styles/profileStyles";
import useStore from "../store";
import TriggerItem from "../components/triggerItem";

const Profile = () => {
  const navigation = useNavigation();
  const { userSlice, triggerSlice } = useStore();
  const { user, getUser } = userSlice;
  const { triggers, getTriggers } = triggerSlice;
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    if (user?._id) {
      // Check if user ID is defined
      await getUser(user._id);
      await getTriggers(user._id);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUserData();
  }, [user?._id]);

  useFocusEffect(
    React.useCallback(() => {
      fetchUserData();
    }, []),
  );

  const sortedTriggers = [...triggers].sort(
    (a, b) => new Date(b.time) - new Date(a.time),
  );

  const displayTriggers = sortedTriggers.map((trigger) => (
    <TriggerItem
      key={trigger._id}
      title={trigger.title}
      message={trigger.message}
      time={trigger.time}
    />
  ));

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <SafeAreaView style={profileStyles.container}>
      <View style={profileStyles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("FriendView")}
          style={profileStyles.iconButton}
        >
          <Ionicons name="people-circle-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Settings")}
          style={profileStyles.iconButton}
        >
          <Ionicons name="settings-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={profileStyles.profileContainer}>
        <Image
          source={{
            uri:
              user.avatar || "https://www.shareicon.net/data/512x512/2017/02/09/878597_user_512x512.png",
          }}
          style={profileStyles.avatar}
        />
        <Text style={profileStyles.name}>{user.username || "Unknown"}</Text>
      </View>

      <View style={profileStyles.triggerListContainer}>
        <View style={profileStyles.triggerHeadingContainer}>
          <Text style={profileStyles.triggerHeading}>Trigger Log:</Text>
        </View>
        <ScrollView
          style={profileStyles.triggerContainer}
          alwaysBounceVertical="true"
          showsVerticalScrollIndicator="false"
        >
          {displayTriggers.length > 0 ? (
            displayTriggers
          ) : (
            <Text style={profileStyles.error}>No triggers found</Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
