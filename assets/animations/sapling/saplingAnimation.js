import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Sapling from "./Sapling";
import Sapling_1 from "./sapling_1";
import Sapling_2 from "./sapling_2";
import Sapling_3 from "./sapling_3";
import Sapling_4 from "./sapling_4";
import Sapling_5 from "./sapling_5";

const FrameComponents = [
  Sapling,
  Sapling_1,
  Sapling_2,
  Sapling_3,
  Sapling_4,
  Sapling_5,
  Sapling,
  Sapling_1,
  Sapling_2,
  Sapling_3,
  Sapling_4,
  Sapling_5,
];

const SaplingAnimation = () => {
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

export default SaplingAnimation;
