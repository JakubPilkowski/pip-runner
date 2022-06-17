import React, { FC, memo, useMemo } from 'react';
import { Animated } from 'react-native';

import textStyles from './HelperText.styles';
import HelperTextProps from './HelperText.types';

const HelperText: FC<HelperTextProps> = ({ text, isError = false, styles = {} }) => {
  const helperTextStyles = useMemo(
    () => ({
      // color: isError ? theme.colors.error : theme.colors.gray,
      ...textStyles(),
      ...styles,
    }),
    [styles]
  );

  return <Animated.Text style={helperTextStyles}>{text}</Animated.Text>;
};

export default memo(HelperText);
