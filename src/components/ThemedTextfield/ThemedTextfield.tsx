import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import {
  TextInput,
  View,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

import useToggle from 'hooks/useToggle';

import HelperText from './HelperText';
import Label from './Label';

import themedTextfieldStyles from './ThemedTextfield.styles';
import ThemedTextfieldProps from './ThemedTextfield.types';
import COLORS from 'assets/styles/COLORS';

const defaultFunction = () => {};
const defualtObject = {};

const ThemedTextfield = forwardRef<TextInput, ThemedTextfieldProps>(
  (
    {
      label,
      autoFocus = false,
      name,
      value,
      onChange,
      disabled,
      wrapperStyles = defualtObject,
      containerStyles = defualtObject,
      inputStyles = defualtObject,
      keyboardType = 'default',
      helperText = '',
      error = '',
      isTextSecured = false,
      startAdornment,
      onFocus = defaultFunction,
      onBlur = defaultFunction,
      onSubmit = defaultFunction,
      LabelProps = defualtObject,
      props,
    },
    ref
  ) => {
    const textInputRef = useRef<TextInput>(null);

    useImperativeHandle(ref, () => textInputRef.current as TextInput);

    const [isFocused, { setTrue, setFalse }] = useToggle(autoFocus);

    const textfieldStyles = themedTextfieldStyles({
      wrapperStyles,
      containerStyles,
      inputStyles,
    });

    const handleFocus = useCallback(() => {
      setTrue();
      onFocus(name);
    }, [onFocus, name, setTrue]);

    const handleBlur = useCallback(() => {
      setFalse();
      onBlur(name);
    }, [setFalse, onBlur, name]);

    useEffect(() => {
      if (isFocused && !textInputRef.current?.isFocused()) {
        textInputRef.current?.focus();
      } else if (!isFocused && textInputRef.current?.isFocused()) {
        textInputRef.current.blur();
      }
    }, [isFocused, name]);

    const handleTextChange = useCallback(
      (text: string) => {
        onChange({ name: name || '', value: text });
      },
      [name, onChange]
    );

    const handleSubmit = useCallback(
      (props: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        onSubmit(name, props);
      },
      [name, onSubmit]
    );

    return (
      <View style={textfieldStyles.wrapperStyles}>
        <View style={textfieldStyles.containerStyles}>
          {startAdornment}
          {label && (
            <Label
              label={label}
              open={isFocused || Boolean(value)}
              onLabelClick={setTrue}
              disabled={disabled}
              {...LabelProps}
            />
          )}
          <View style={textfieldStyles.boxStyles} />
          <TextInput
            value={value}
            keyboardAppearance="light"
            keyboardType={keyboardType}
            autoFocus={autoFocus}
            autoCorrect={false}
            allowFontScaling={false}
            autoCompleteType="off"
            style={textfieldStyles.inputStyles}
            onFocus={handleFocus}
            onBlur={handleBlur}
            editable={!disabled}
            selectionColor={COLORS.secondary}
            ref={textInputRef}
            onChangeText={handleTextChange}
            secureTextEntry={isTextSecured}
            placeholder=""
            onSubmitEditing={handleSubmit}
            disableFullscreenUI
            {...props}
          />
        </View>
        {Boolean(helperText) && <HelperText text={helperText} />}
        {Boolean(error) && <HelperText text={error} isError={Boolean(error)} />}
      </View>
    );
  }
);

export default memo(ThemedTextfield);
