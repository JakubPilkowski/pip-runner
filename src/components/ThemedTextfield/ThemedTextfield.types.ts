import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputProps,
  TextInputSubmitEditingEventData,
  TextStyle,
  ViewStyle,
} from 'react-native';
import LabelProps from './Label/Label.types';

export type ThemedTextfieldInputAction = { name: string; value: string };

type ThemedTextfieldProps = {
  label?: string;
  autoFocus?: boolean;
  name: string;
  value: string;
  onChange: ({ name, value }: ThemedTextfieldInputAction) => void;
  disabled?: boolean;
  wrapperStyles?: ViewStyle;
  containerStyles?: ViewStyle;
  boxStyles?: ViewStyle;
  inputStyles?: TextStyle;
  adornmentStyles?: ViewStyle;
  keyboardType?: KeyboardTypeOptions;
  helperText?: string;
  error?: string;
  isTextSecured?: boolean;
  textSecuredAdornment?: React.ReactNode;
  hasPasswordAdornment?: boolean;
  textInsecuredAdornment?: React.ReactNode;
  onTextSecureClick?: () => void;
  hasEndAdornment?: boolean;
  isLoading?: boolean;
  hasLoadingAdornment?: boolean;
  hasAdornment?: boolean;
  hideClearIcon?: boolean;
  startAdornment?: React.ReactNode;
  errorAdornment?: React.ReactNode;
  hasErrorAdornment?: boolean;
  clearAdornment?: React.ReactNode;
  hasClearAdornment?: boolean;
  loadingAdornment?: React.ReactNode;
  customAdornment?: React.ReactNode;
  fieldType?: 'textfield' | 'passwordfield';
  onClearClick?: ({ name, value }: ThemedTextfieldInputAction) => void;
  onFocus?: (name: string) => void;
  onBlur?: (name: string) => void;
  onSubmit?: (name: string, props?: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  LabelProps?: Partial<LabelProps>;
  props?: TextInputProps;
};

export default ThemedTextfieldProps;
