import React from "react";
import Svg, { Path } from "react-native-svg";

const SVGComponent = (props) => (
  <Svg width={33} height={33} viewBox="0 0 33 33" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.625 11.125H20.4229L21.8083 4.46041L21.8521 3.99374C21.8521 3.39582 21.6042 2.84166 21.2104 2.44791L19.6646 0.916656L10.0687 10.5271C9.52916 11.0521 9.20833 11.7812 9.20833 12.5833V27.1667C9.20833 28.7708 10.5208 30.0833 12.125 30.0833H25.25C26.4604 30.0833 27.4958 29.3542 27.9333 28.3042L32.3375 18.0229C32.4687 17.6875 32.5417 17.3375 32.5417 16.9583V14.0417C32.5417 12.4375 31.2292 11.125 29.625 11.125ZM29.625 16.9583L25.25 27.1667H12.125V12.5833L18.4542 6.25416L16.8354 14.0417H29.625V16.9583ZM6.29166 12.5833H0.458328V30.0833H6.29166V12.5833Z"
      fill="white"
      fillOpacity={0.54}
    />
  </Svg>
);

export default SVGComponent;
