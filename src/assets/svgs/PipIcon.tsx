import COLORS from 'assets/styles/COLORS';
import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

const PipIcon = () => {
  return (
    <Svg width="64" height="64" viewBox="0 0 64 64">
      <G transform="matrix(0.11 0 0 0.11 29.51 27.62)" id="ibFlRcJhQm2OoUzB3aqHF">
        <Path
          fill="#fff"
          fillRule="nonzero"
          vector-effect="non-scaling-stroke"
          transform=" translate(0, 0)"
          d="M -192 -104.0489 C -192 -117.27673 -181.27673 -128 -168.0489 -128 L 168.93876999999998 -128 L 168.93876999999998 -128 C 181.67512999999997 -128 191.99999999999997 -117.67514 191.99999999999997 -104.93877 L 191.99999999999997 104.64214999999999 L 191.99999999999997 104.64214999999999 C 191.99999999999997 117.54233999999998 181.54232999999996 127.99999999999999 168.64214999999996 127.99999999999999 L -170.42190000000005 127.99999999999999 L -170.42190000000005 127.99999999999999 C -182.33915000000005 127.99999999999999 -192.00000000000006 118.33915999999999 -192.00000000000006 106.4219 z"
          stroke-linecap="round"
        />
      </G>
      <G transform="matrix(0.07 0 0 0.07 41.11 40.34)" id="lsdL30Ph9kO0d7IP0h9fC">
        <Path
          stroke={COLORS.error}
          strokeWidth={50}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={4}
          fill="#fff"
          fillRule="nonzero"
          vector-effect="non-scaling-stroke"
          transform=" translate(0, 0)"
          d="M -192 -104.0489 C -192 -117.27673 -181.27673 -128 -168.0489 -128 L 168.93876999999998 -128 L 168.93876999999998 -128 C 181.67512999999997 -128 191.99999999999997 -117.67514 191.99999999999997 -104.93877 L 191.99999999999997 104.64214999999999 L 191.99999999999997 104.64214999999999 C 191.99999999999997 117.54233999999998 181.54232999999996 127.99999999999999 168.64214999999996 127.99999999999999 L -170.42190000000005 127.99999999999999 L -170.42190000000005 127.99999999999999 C -182.33915000000005 127.99999999999999 -192.00000000000006 118.33915999999999 -192.00000000000006 106.4219 z"
          stroke-linecap="round"
        />
      </G>
      <G transform="matrix(0.14 0.14 -0.14 0.14 18.21 23.46)" id="NaUU23XXxwkxYZgBwPJPg">
        <Path
          fill={COLORS.error}
          vector-effect="non-scaling-stroke"
          transform=" translate(-40, -40)"
          d="M 41.17 72.5 L 80 40 L 41.17 7.5 L 41.17 28.105 L 0 28.105 L 0 51.952 L 41.17 51.952 L 41.17 72.5 z"
          stroke-linecap="round"
        />
      </G>
    </Svg>
  );
};

export default memo(PipIcon);
