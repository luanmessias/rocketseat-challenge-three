import React from "react";
import Svg, { Path } from "react-native-svg";

const SVGComponent = (props) => (
  <Svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
    <Path
      d="M15 1.51071L13.4893 0L7.5 5.98929L1.51071 0L0 1.51071L5.98929 7.5L0 13.4893L1.51071 15L7.5 9.01071L13.4893 15L15 13.4893L9.01071 7.5L15 1.51071Z"
      fill="white"
    />
  </Svg>
);

export default SVGComponent;
