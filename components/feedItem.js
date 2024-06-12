import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import feedStyles from "../styles/feedStyles";
import useStore from "../store";

const FeedItem = ({ feed, onPress }) => {
  const navigation = useNavigation();
  const { triggerSlice, relapseSlice, milestoneSlice, userSlice } = useStore();
  const { user, getFriend } = userSlice;
  // const { getFriend } = friendSlice;
  const { getTrigger } = triggerSlice;
  const { getRelapseItem } = relapseSlice;
  const { getMilestone } = milestoneSlice;
  const [feedItem, setFeed] = useState({});
  const [feedUsername, setFeedUsername] = useState('');

  useEffect(() => {
    const fetchFeedItem = async () => {
      let fetchedFeed = {};
      if (feed.feedType === "Trigger") {
        // console.log('Feed type trigger');
        fetchedFeed = await getTrigger(user._id, feed.feedItemId);
        setFeed({ ...fetchedFeed, content: fetchedFeed.message });
      } else if (feed.feedType === "Relapse") {
        console.log('Feed type relapse');
        fetchedFeed = await getRelapseItem(user._id, feed.feedItemId);
        console.log(fetchedFeed);
        // setFeed(fetchedFeed);
        setFeed({ ...fetchedFeed, content: fetchedFeed.reason });
      } else if (feed.feedType === "Milestone") {
        // console.log('Feed type milestone');
        fetchedFeed = await getMilestone(user._id, feed.feedItemId);
        // setFeed(fetchedFeed);
        setFeed({ ...fetchedFeed, content: fetchedFeed.description });
      }

      if (fetchedFeed.userId !== user._id) {
        const fetchedFriend = await getFriend(fetchedFeed.userId);
        setFeedUsername(fetchedFriend.username);
      } else {
        setFeedUsername('Me');
      }
    };

    fetchFeedItem();
  }, []);

  // const handlePress = () => {
  //   console.log('Handle Press Feed:', feed);
  //   onPress(feed);
  // };

  const handlePress = async () => {
    console.log('Handle Press: ', feed);
    try {
      if (feed.isSelfItem) {
        console.log('SELF');
        // navigate to user's own profile
        navigation.navigate("Profile");
      } else {
        console.log('FRIEND');
        // navigate to friend's profile
        navigation.navigate("FriendProfile", { id: feed.feedUserId });
      }
    } catch (error) {
      Alert.alert("Error", "Failed to load user");
    }
  };

  const feedAge = () => {
    if (feed.age < 1) {
      return `${Math.floor(feed.age * 24)}h`;
    } else if (feed.age < 7) {
      return `${Math.floor(feed.age)}d`;
    } else {
      return `${Math.floor(feed.age / 7)}w`;
    }
  };

  return (
    <TouchableOpacity style={feedStyles.feedItem} onPress={handlePress}>
      <View style={feedStyles.avatarContainer}>
        <Image
          source={{
            uri:
              // user.avatar ||
              "https://www.shareicon.net/data/512x512/2017/02/09/878597_user_512x512.png",
          }}
          style={feedStyles.avatar}
        />
      </View>
      <View style={feedStyles.feedItemContent}>
        <Text style={feedStyles.feedItemText}>
          {feedItem.content}
          {" "}
        </Text>
        <Text style={feedStyles.feedPokeText}>
          {feedUsername}
        </Text>
      </View>
      <View style={feedStyles.feedTime}>
        <Text style={feedStyles.feedTimeText}>
          {feedAge()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FeedItem;
