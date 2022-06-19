import { TextStyle, ViewStyle } from 'react-native';

import COLORS from 'assets/styles/COLORS';

type LoadingDialogStyles = {
  //   wrapperOuterStyles: ViewStyle;
  wrapperInnerStyles: ViewStyle;
  titleStyles: TextStyle;
};

export default function getLoaderStyles(isTitle: boolean): LoadingDialogStyles {
  return {
    // wrapperOuterStyles: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: COLORS.primary,
    // },
    wrapperInnerStyles: {
      backgroundColor: COLORS.secondary,
      borderRadius: 20,
      paddingVertical: 40,
      paddingHorizontal: isTitle ? 50 : 40,
      alignItems: 'center',
      shadowColor: COLORS.primary,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    titleStyles: {
      color: COLORS.primary,
      marginTop: 10,
    },
  };
}
