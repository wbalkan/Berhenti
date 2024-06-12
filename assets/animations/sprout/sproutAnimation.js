import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Sprout from "./Sprout";
import Sprout_2 from "./sprout_2";
import Sprout_3 from "./sprout_3";
import Sprout_4 from "./sprout_4";
import Sprout_5 from "./sprout_5";

const FrameComponents = [
  Sprout,
  Sprout_2,
  Sprout_3,
  Sprout_4,
  Sprout_5,
  Sprout,
  Sprout_2,
  Sprout_3,
  Sprout_4,
  Sprout_5,
];

const SproutAnimation = () => {
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

export default SproutAnimation;
