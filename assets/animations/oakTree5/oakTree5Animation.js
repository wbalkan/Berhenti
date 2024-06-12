import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import OakTree5 from "./oak_tree_5";
import OakTree5_1 from "./oak_tree_5_1";
import OakTree5_3 from "./oakTree5_3";
import OakTree5_4 from "./oakTree5_4";
import OakTree5_5 from "./oakTree5_5";
import OakTree5_6 from "./oakTree5_6";
import OakTree5_7 from "./oakTree5_7";
import OakTree5_8 from "./oakTree5_8";

const FrameComponents = [
  OakTree5,
  OakTree5_1,
  OakTree5_3,
  OakTree5_4,
  OakTree5_5,
  OakTree5_6,
  OakTree5_7,
  OakTree5_8,
  OakTree5,
  OakTree5_1,
  OakTree5_3,
  OakTree5_4,
  OakTree5_5,
  OakTree5_6,
  OakTree5_7,
  OakTree5_8,
];

const OakTree5Animation = () => {
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

export default OakTree5Animation;
