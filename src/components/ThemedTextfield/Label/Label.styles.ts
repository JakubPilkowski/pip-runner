import { TextStyle, ViewStyle } from 'react-native';

import COLORS from 'assets/styles/COLORS';

export default (): LabelStyles => {
  return {
    wrapperStyles: {
      position: 'absolute',
      backgroundColor: COLORS.primary,
      zIndex: 10,
    },
    labelStyles: {
      fontSize: 14,
      color: COLORS.secondary,
    },
  };
};

export type LabelStyles = {
  wrapperStyles: ViewStyle;
  labelStyles: TextStyle;
};
