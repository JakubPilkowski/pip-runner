import COLORS from 'assets/styles/COLORS';
import { TextStyle, ViewStyle } from 'react-native';

type StylesOptions = {
  wrapperStyles: ViewStyle;
  containerStyles: ViewStyle;
  inputStyles: TextStyle;
};

export default ({
  wrapperStyles,
  containerStyles,
  inputStyles,
}: StylesOptions): ThemedTextFieldStyles => {
  return {
    wrapperStyles: {
      marginTop: 5,
      marginBottom: 2,
      ...wrapperStyles,
    },
    containerStyles: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      ...containerStyles,
    },
    boxStyles: {
      position: 'absolute',
      borderColor: COLORS.primary,
      borderWidth: 1,
      borderRadius: 12,
      alignSelf: 'flex-start',
      width: '100%',
      height: 45,
    },
    inputStyles: {
      fontSize: 16,
      fontFamily: 'Lato',
      padding: 10,
      flex: 1,
      // color: ,
      ...inputStyles,
    },
  };
};

export type ThemedTextFieldStyles = {
  wrapperStyles: ViewStyle;
  containerStyles: ViewStyle;
  inputStyles: TextStyle;
  boxStyles: ViewStyle;
};
