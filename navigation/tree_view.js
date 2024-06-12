import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Clouds from "../assets/images/clouds";
import Hills from "../assets/images/hill";
import WoodenSign from "../assets/images/WoodenSign";
import SproutAnimation from "../assets/animations/sprout/sproutAnimation";
import SaplingAnimation from "../assets/animations/sapling/saplingAnimation";
import OakTree3Animation from "../assets/animations/oakTree3/oakTree3Animation";
import OakTree4Animation from "../assets/animations/oakTree4/oakTree4Animation";
import OakTree5Animation from "../assets/animations/oakTree5/oakTree5Animation";
import useStore from "../store/index";
import treePageStyles from "../styles/treePageStyles";

const TreeView = () => {
  const title = "Your Tree";
  const subtitle =
    "Tap on the branches of your tree whenever you experience triggers.";
  let content;

  const { getUser, user } = useStore((state) => state.userSlice);

  useEffect(() => {
    getUser(user.id);
  }, []);

  if (user === null || user === undefined) {
    return <Text> Loading ... </Text>;
  } else {
    const userStreak = user.currentStreak;
    if (userStreak <= 7) {
      content = (
        <View style={treePageStyles.container}>
          <View style={treePageStyles.titleContainer}>
            <Text style={treePageStyles.title}>{title}</Text>
          </View>
          <View style={treePageStyles.subtitleContainer}>
            <Text style={treePageStyles.subtitle}>{subtitle}</Text>
          </View>
          <View style={treePageStyles.cloudsContainer}>
            <Clouds />
          </View>
          <View style={treePageStyles.sproutContainer}>
            <SproutAnimation />
          </View>
          <View style={treePageStyles.signContainer}>
            <WoodenSign />
          </View>
          <Text style={treePageStyles.streakContainer}>
            {userStreak} Days clean!
          </Text>
          <View>
            <Hills style={treePageStyles.hillContainer} />
          </View>
        </View>
      );
    } else if (userStreak > 7 && userStreak <= 14) {
      content = (
        <View style={treePageStyles.container}>
          <View style={treePageStyles.titleContainer}>
            <Text style={treePageStyles.title}>{title}</Text>
          </View>
          <View style={treePageStyles.subtitleContainer}>
            <Text style={treePageStyles.subtitle}>{subtitle}</Text>
          </View>
          <View style={treePageStyles.cloudsContainer}>
            <Clouds />
          </View>
          <View style={treePageStyles.saplingContainer}>
            <SaplingAnimation />
          </View>
          <View style={treePageStyles.signContainer}>
            <WoodenSign />
          </View>
          <Text style={treePageStyles.streakContainer}>
            {userStreak} Days clean!
          </Text>
          <View>
            <Hills style={treePageStyles.hillContainer} />
          </View>
        </View>
      );
    } else if (userStreak > 14 && userStreak <= 21) {
      content = (
        <View style={treePageStyles.container}>
          <View style={treePageStyles.titleContainer}>
            <Text style={treePageStyles.title}>{title}</Text>
          </View>
          <View style={treePageStyles.subtitleContainer}>
            <Text style={treePageStyles.subtitle}>{subtitle}</Text>
          </View>
          <View style={treePageStyles.cloudsContainer}>
            <Clouds />
          </View>
          <View style={treePageStyles.oakTree3Container}>
            <OakTree3Animation />
          </View>
          <View style={treePageStyles.signContainer}>
            <WoodenSign />
          </View>
          <Text style={treePageStyles.streakContainer}>
            {userStreak} Days clean!
          </Text>
          <View>
            <Hills style={treePageStyles.hillContainer} />
          </View>
        </View>
      );
    } else if (userStreak > 21 && userStreak <= 28) {
      content = (
        <View style={treePageStyles.container}>
          <View style={treePageStyles.titleContainer}>
            <Text style={treePageStyles.title}>{title}</Text>
          </View>
          <View style={treePageStyles.subtitleContainer}>
            <Text style={treePageStyles.subtitle}>{subtitle}</Text>
          </View>
          <View style={treePageStyles.cloudsContainer}>
            <Clouds />
          </View>
          <View style={treePageStyles.oakTree4Container}>
            <OakTree4Animation />
          </View>
          <View style={treePageStyles.signContainer}>
            <WoodenSign />
          </View>
          <Text style={treePageStyles.streakContainer}>
            {userStreak} Days clean!
          </Text>
          <View>
            <Hills style={treePageStyles.hillContainer} />
          </View>
        </View>
      );
    } else if (userStreak > 28) {
      content = (
        <View style={treePageStyles.container}>
          <View style={treePageStyles.titleContainer}>
            <Text style={treePageStyles.title}>{title}</Text>
          </View>
          <View style={treePageStyles.subtitleContainer}>
            <Text style={treePageStyles.subtitle}>{subtitle}</Text>
          </View>
          <View style={treePageStyles.cloudsContainer}>
            <Clouds />
          </View>
          <View style={treePageStyles.oakTree5Container}>
            <OakTree5Animation />
          </View>
          <View style={treePageStyles.signContainer}>
            <WoodenSign />
          </View>
          <Text style={treePageStyles.streakContainer}>
            {userStreak} Days clean!
          </Text>
          <View>
            <Hills style={treePageStyles.hillContainer} />
          </View>
        </View>
      );
    }
    return content;
  }
};

export default TreeView;
