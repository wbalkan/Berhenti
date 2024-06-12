import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import friendViewStyles from '../styles/friendViewStyles';

const FriendItem = ({ id, avatarLink, name }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('FriendProfile', { id });
  };

  return (
    <TouchableOpacity style={friendViewStyles.friendItem} onPress={handlePress}>
      <View style={friendViewStyles.avatarContainer}>
        <Image source={{ uri: avatarLink }} style={friendViewStyles.avatar} />
      </View>
      <View style={friendViewStyles.friendItemContent}>
        <Text style={friendViewStyles.friendItemText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FriendItem;
