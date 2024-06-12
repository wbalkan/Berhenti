import React, { useState, useEffect, useCallback } from "react";
import { View, Text, ScrollView, ActivityIndicator, Alert } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import FeedItem from "../components/feedItem";
import useStore from "../store";
import feedStyles from "../styles/feedStyles";

// nest stack navigator to handle two internal views
const FeedTab = () => {
  const [loading, setLoading] = useState(true);
  const { userSlice, feedSlice } = useStore();
  const { user } = userSlice;
  const { feed, getFeed } = feedSlice;

  const loadFeed = async () => {
    if (user?._id) {
      await getFeed(user._id);
    }
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      loadFeed();
    }, [user?._id]),
  );

  const categorizedFeedItems = () => {
    const TodayFeedItems = [];
    const ThisWeekFeedItems = [];
    const PreviousFeedItems = [];
    feed.forEach((feedItem) => {
      if (feedItem.age < 7) {
        if (feedItem.age <= 1) {
          TodayFeedItems.push(feedItem);
        } else {
          ThisWeekFeedItems.push(feedItem);
        }
      } else {
        PreviousFeedItems.push(feedItem);
      }
    });
    TodayFeedItems.sort((a, b) => a.age - b.age);
    ThisWeekFeedItems.sort((a, b) => a.age - b.age);
    PreviousFeedItems.sort((a, b) => a.age - b.age);

    return { TodayFeedItems, ThisWeekFeedItems, PreviousFeedItems };
  };

  const { TodayFeedItems, ThisWeekFeedItems, PreviousFeedItems } =
    categorizedFeedItems();

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <View style={feedStyles.container}>
      <View style={feedStyles.headerContainer}>
        <Text style={feedStyles.title}> Feed </Text>
      </View>
      <ScrollView style={feedStyles.scrollContainer}>
        <View style={feedStyles.subHeaderContainer}>
          <Text style={feedStyles.sectionHeader}> Today </Text>
        </View>
        {TodayFeedItems && TodayFeedItems.length > 0 ? (
          <View style={feedStyles.scrollContainer}>
            {TodayFeedItems.map((feedItem) => (
              <FeedItem key={feedItem._id} feed={feedItem} />
            ))}
          </View>
        ) : (
          <View style={feedStyles.noItemContainer}>
            <Text style={feedStyles.noItemText}>
              {" "}
              No events to display for today{" "}
            </Text>
          </View>
        )}
        <View style={feedStyles.subHeaderContainer}>
          <Text style={feedStyles.sectionHeader}> This Week </Text>
        </View>
        {ThisWeekFeedItems && ThisWeekFeedItems.length > 0 ? (
          <View style={feedStyles.scrollContainer}>
            {ThisWeekFeedItems.filter((feedItem) => feedItem).map(
              (feedItem) => (
                <FeedItem key={feedItem._id} feed={feedItem} />
              ),
            )}
          </View>
        ) : (
          <View style={feedStyles.noItemContainer}>
            <Text style={feedStyles.noItemText}>
              {" "}
              No events to display for this week{" "}
            </Text>
          </View>
        )}
        <View style={feedStyles.subHeaderContainer}>
          <Text style={feedStyles.sectionHeader}> Previous Weeks </Text>
        </View>
        {PreviousFeedItems && PreviousFeedItems.length > 0 ? (
          <View style={feedStyles.scrollContainer}>
            {PreviousFeedItems.filter((feedItem) => feedItem).map(
              (feedItem) => (
                <FeedItem key={feedItem._id} feedItem={feedItem} />
              ),
            )}
          </View>
        ) : (
          <View style={feedStyles.noItemContainer}>
            <Text style={feedStyles.noItemText}>
              {" "}
              No events to display for previous weeks{" "}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default FeedTab;
