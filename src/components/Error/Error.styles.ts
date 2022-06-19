import { TextStyle, ViewStyle } from 'react-native';

import COLORS from 'assets/styles/COLORS';

type ErrorStyles = {
  wrapperStyles: ViewStyle;
  messageStyles: TextStyle;
};

export default function getErrorStyles(): ErrorStyles {
  return {
    wrapperStyles: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.error,
      paddingVertical: 5,
    },
    messageStyles: {
      fontFamily: 'Lato',
      fontSize: 14,
      lineHeight: 16,
    },
  };
}
