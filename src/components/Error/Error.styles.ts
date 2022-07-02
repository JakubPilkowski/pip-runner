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
      paddingVertical: 10,
      borderRadius: 10,
    },
    messageStyles: {
      fontFamily: 'Lato',
      fontSize: 18,
      lineHeight: 20,
      color: COLORS.secondary,
    },
  };
}
