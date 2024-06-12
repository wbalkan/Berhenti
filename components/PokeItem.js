import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useStore from '../store';
import pokeViewStyles from '../styles/pokeViewStyles';

const PokeItem = ({ poke, onPress }) => {
  const navigation = useNavigation();
  const { userSlice } = useStore();
  const { getFriend } = userSlice;
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    const fetchFriend = async () => {
      const fetchedFriend = await getFriend(poke.from);
      setFriend(fetchedFriend);
    };

    fetchFriend();
  }, [poke.from]);

  const handlePress = () => {
    onPress(poke);
  };

  const friendAvatar = friend?.avatar || 'https://via.placeholder.com/150';
  const friendName = friend?.username || 'Unknown User';
  const pokeContent = poke.content || 'No content';
  const pokeDate = new Date(poke.dateTime).toLocaleDateString() || 'Unknown Date';

  return (
    <TouchableOpacity style={pokeViewStyles.itemContainer} onPress={handlePress}>
      <Image source={{ uri: friendAvatar }} style={pokeViewStyles.avatar} />
      <View style={pokeViewStyles.textContainer}>
        <Text style={pokeViewStyles.name}>{friendName}</Text>
        <Text style={pokeViewStyles.content}>{pokeContent}</Text>
        <Text style={pokeViewStyles.dateTime}>{pokeDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PokeItem;
