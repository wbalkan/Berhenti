import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import useStore from '../store';
import FriendItem from '../components/FriendItem';
import friendViewStyles from '../styles/friendViewStyles';

const FriendView = () => {
  const navigation = useNavigation();
  const user = useStore(({ userSlice }) => userSlice.user);
  const friends = useStore(({ friendSlice }) => friendSlice.friends);
  const getFriends = useStore(({ friendSlice }) => friendSlice.getFriends);

  const fetchFriends = async () => {
    if (user._id) {
      await getFriends(user._id);
    }
  };

  useEffect(() => {
    fetchFriends();
  }, [user._id]);

  useFocusEffect(
    React.useCallback(() => {
      fetchFriends();
    }, []),
  );

  const handleAddFriendPress = () => {
    navigation.navigate('AddFriend');
  };

  return (
    <View style={friendViewStyles.container}>
      <View style={friendViewStyles.headerContainer}>
        <Text style={friendViewStyles.title}>Friends</Text>
        <TouchableOpacity onPress={handleAddFriendPress}>
          <Ionicons name="person-add-outline" size={24} color="black" style={friendViewStyles.addStyle} />
        </TouchableOpacity>
      </View>
      {friends && friends.length > 0 ? (
        <ScrollView style={friendViewStyles.scrollContainer}>
          {friends.map((friend) => (
            <FriendItem
              key={friend._id}
              id={friend._id}
              avatarLink={friend.avatar}
              name={friend.username}
            />
          ))}
        </ScrollView>
      ) : (
        <Text style={friendViewStyles.noFriendsText}>No friends found. Add some friends!</Text>
      )}
    </View>
  );
};

export default FriendView;
