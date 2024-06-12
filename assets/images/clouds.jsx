import React from "react";
import { View } from "react-native";
import { Svg, Rect } from "react-native-svg";

const Clouds = () => {
  return (
    <View>
      <Svg width="393" height="432" viewBox="0 0 393 432">
        <Rect
          x="-46"
          y="143"
          width="181"
          height="161"
          rx="20"
          fill="#F4F2EC"
          fillOpacity="0.8"
        />
        <Rect
          x="21"
          y="359"
          width="145"
          height="73"
          rx="20"
          fill="#F4F2EC"
          fillOpacity="0.6"
        />
        <Rect
          x="220"
          y="220"
          width="248"
          height="131"
          rx="20"
          fill="#F4F2EC"
          fillOpacity="0.55"
        />
        <Rect
          x="180"
          y="20"
          width="148"
          height="101"
          rx="20"
          fill="#F4F2EC"
          fillOpacity="0.35"
        />
      </Svg>
    </View>
  );
};

export default Clouds;
