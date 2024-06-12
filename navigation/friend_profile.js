import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, Alert, TouchableOpacity, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import { useRoute, useNavigation } from '@react-navigation/native';
import common from '../styles/commonStyles';
import useStore from '../store';
import profileStyles from '../styles/profileStyles';

const pokeMessages = [
  'Keep going strong!',
  'You can do it!',
  'Stay focused!',
  'Proud of you!',
  'One step at a time!',
  'Keep your head up!',
  'Stay positive!',
  'You got this!',
];

const FriendProfile = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params || {}; // Added default empty object
  const { userSlice, friendSlice, pokeSlice } = useStore();
  const { user, getFriend } = userSlice;
  const { removeFriend } = friendSlice;
  const { sendPoke } = pokeSlice;
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriend = async () => {
      if (id) { // Check if id is defined
        const fetchedFriend = await getFriend(id);
        setFriend(fetchedFriend);
      }
      setLoading(false);
    };

    fetchFriend();
  }, [id]);

  const handleRemoveFriend = async () => {
    try {
      if (user?._id && friend) { // Check if user and id are defined
        await removeFriend(user._id, friend._id);
        Alert.alert('Success', 'Friend removed successfully');
        navigation.goBack();
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to remove friend');
    }
  };

  const handlePokePress = async (message) => {
    try {
      if (user?._id && friend?._id) { // Check if user and friend are defined
        await sendPoke(user._id, { to: friend._id, from: user._id, content: message });
        Alert.alert('Poke Sent', 'Your poke has been sent!');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to send poke');
    }
  };

  // if (loading) {
  //   return <ActivityIndicator size="large" color="#0000ff" />;
  // }

  if (!friend) {
    return (
      <SafeAreaView>
        <View style={profileStyles.container}>
          <Text style={profileStyles.error}>Friend not found</Text>
        </View>
        <Text style={profileStyles.title}>Poke Board</Text>
        <View style={profileStyles.pokeBoard}>
          {pokeMessages.map((message, index) => (
            <TouchableOpacity
              // eslint-disable-next-line
              key={index}
              style={profileStyles.pokeTile}
              onPress={() => handlePokePress(message)}
            >
              <Text style={profileStyles.pokeText}>{message}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={profileStyles.container}>
      <View style={profileStyles.profileContainer}>
        <Image
          source={{ uri: friend.avatar || 'https://via.placeholder.com/150' }}
          style={profileStyles.avatar}
        />
        <Text style={profileStyles.name}>{friend.username || 'Unknown'}</Text>
        <View style={profileStyles.removeWrapper}>
          <Button title="Remove Friend"
            onPress={handleRemoveFriend}
            titleStyle={{ color: "white",
              fontSize: 20,
              fontFamily: common.fonts.semiBold,
              height: 20,
            }}
            buttonStyle={{
              backgroundColor: "#708C80",
            }}
          />
        </View>
      </View>
      <Text style={profileStyles.title}>Poke Board</Text>
      <View style={profileStyles.pokeBoard}>
        {pokeMessages.map((message, index) => (
          <TouchableOpacity
            // eslint-disable-next-line
            key={index}
            style={profileStyles.pokeTile}
            onPress={() => handlePokePress(message)}
          >
            <Text style={profileStyles.pokeText}>{message}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default FriendProfile;
