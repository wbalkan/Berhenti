import React, { useEffect, useState, useCallback } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import useStore from "../store";
import PokeItem from "../components/PokeItem";
import pokeViewStyles from "../styles/pokeViewStyles";

const PokeView = () => {
  const navigation = useNavigation();
  const { userSlice, pokeSlice } = useStore();
  const { user } = userSlice;
  const { pokes, getPokes, readPoke } = pokeSlice;
  const [loading, setLoading] = useState(true);

  const fetchPokes = async () => {
    try {
      if (user?._id) {
        await getPokes(user._id);
      }
    } catch (error) {
      console.error("Failed to fetch pokes", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokes();
  }, [user?._id]);

  useFocusEffect(
    useCallback(() => {
      fetchPokes();
    }, [user?._id]),
  );

  const handlePokePress = async (poke) => {
    try {
      const response = await readPoke(user._id, poke);
      await fetchPokes();
      navigation.navigate("FriendProfile", { id: poke.from });
    } catch (error) {
      Alert.alert("Error", "Failed to mark poke as read");
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const unreadPokes = pokes?.unread?.filter((poke) => poke) || [];

  return (
    <SafeAreaView style={pokeViewStyles.container}>
      <Text style={pokeViewStyles.title}>Pokes</Text>
      {unreadPokes && unreadPokes.length > 0 ? (
        <ScrollView style={pokeViewStyles.scrollContainer}>
          {unreadPokes.map((poke) => (
            <PokeItem key={poke._id} poke={poke} onPress={handlePokePress} />
          ))}
        </ScrollView>
      ) : (
        <Text style={pokeViewStyles.noPokesText}>
          No unread pokes. You are all caught up!
        </Text>
      )}
    </SafeAreaView>
  );
};

export default PokeView;
