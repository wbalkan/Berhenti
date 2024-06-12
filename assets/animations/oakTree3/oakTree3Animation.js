import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import OakTree3 from "./oak_tree_3";
import OakTree3_1 from "./oakTree3_1";
import OakTree3_2 from "./oakTree3_2";
import OakTree3_3 from "./oakTree3_3";
import OakTree3_4 from "./oakTree3_4";
import OakTree3_5 from "./oakTree3_5";

const FrameComponents = [
  OakTree3,
  OakTree3_1,
  OakTree3_2,
  OakTree3_3,
  OakTree3_4,
  OakTree3_5,
  OakTree3,
  OakTree3_1,
  OakTree3_2,
  OakTree3_2,
  OakTree3_3,
  OakTree3_4,
  OakTree3_5,
];

const OakTree3Animation = () => {
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
    }, 200);
  };

  return (
    <TouchableOpacity onPress={startAnimation} activeOpacity={1}>
      {React.createElement(FrameComponents[frameIndex])}
    </TouchableOpacity>
  );
};

export default OakTree3Animation;
