import { TextStyle, ViewStyle } from 'react-native';

export type LabelAnimatedValues = {
  topValueStart: number;
  topValueEnd: number;
  leftValueStart: number;
  leftValueEnd: number;
  fontValueStart: number;
  fontValueEnd: number;
};

type LabelProps = {
  disabled?: boolean;
  label: string;
  onLabelClick: () => void;
  wrapperStyles?: ViewStyle;
  textStyles?: TextStyle;
  open: boolean;
  animatedValues?: LabelAnimatedValues;
  duration?: number;
};

export default LabelProps;
