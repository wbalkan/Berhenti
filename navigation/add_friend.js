import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useStore from '../store';
import friendViewStyles from '../styles/friendViewStyles';

const AddFriend = () => {
  const { userSlice, friendSlice } = useStore();
  const { user, searchUser } = userSlice;
  const { addFriend } = friendSlice;
  const [friendUsername, setFriendUsername] = useState('');
  const navigation = useNavigation();

  const handleAddFriend = async () => {
    try {
      if (!friendUsername) {
        Alert.alert('Error', 'Please enter a username');
        return;
      }
      const result = await searchUser(friendUsername);
      const exactMatch = result.find((u) => u.username === friendUsername);
      if (exactMatch) {
        const userId = user._id;
        if (exactMatch._id === userId) {
          Alert.alert('You stupid', 'You cannot add yourself');
        } else {
          await addFriend(userId, exactMatch._id);
          navigation.goBack();
        }
      } else {
        Alert.alert('User not found', 'The username you entered does not exist');
      }
    } catch (error) {
      console.error('Error adding friend:', error);
      Alert.alert('Error', 'An error occurred while adding the friend');
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={friendViewStyles.title}>Add Friend</Text>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
          placeholder="Enter friend's username"
          value={friendUsername}
          onChangeText={setFriendUsername}
        />
        <View style={friendViewStyles.buttonContainer}>
          <Button title="Add Friend" onPress={handleAddFriend} color="white" style={friendViewStyles.button} />
        </View>
        {userSlice.searchResults === false && (
          <Text style={friendViewStyles.errorText}>User not found</Text>
        )}
      </View>
      <Text style={friendViewStyles.errorText}>You will not become friends until the other user has added you as well!</Text>
    </SafeAreaView>
  );
};

export default AddFriend;
