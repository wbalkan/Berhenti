import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import OakTree4 from "./oak_tree_4";
import OakTree4_1 from "./oakTree4_1";
import OakTree4_2 from "./oakTree4_2";
import OakTree4_3 from "./oakTree4_3";
import OakTree4_4 from "./oakTree4_4";
import OakTree4_5 from "./oakTree4_5";

const FrameComponents = [
  OakTree4,
  OakTree4_1,
  OakTree4_2,
  OakTree4_3,
  OakTree4_4,
  OakTree4_5,
  OakTree4,
  OakTree4_1,
  OakTree4_2,
  OakTree4_3,
  OakTree4_4,
  OakTree4_5,
];

const OakTree4Animation = () => {
  const [frameIndex, setFrameIndex] = useState(0);
  const [animationRunning, setAnimationRunning] = useState(false);

  const startAnimation = () => {
    if (animationRunning) return;
    setAnimationRunning(true);
    let currentFrame = 0;
    const interval = setInterval(() => {
      currentFrame++;
      if (currentFrame < FrameComponents.length) {
        setFrameIndex(currentFrame);
      } else {
        clearInterval(interval);
        setAnimationRunning(false);
        setFrameIndex(0);
      }
    }, 100);
  };

  return (
    <TouchableOpacity onPress={startAnimation} activeOpacity={1}>
      {React.createElement(FrameComponents[frameIndex])}
    </TouchableOpacity>
  );
};

export default OakTree4Animation;
