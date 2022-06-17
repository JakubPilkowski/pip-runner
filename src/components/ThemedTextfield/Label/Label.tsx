import React, { memo, useEffect, useMemo } from 'react';
import { Animated, Pressable, ViewStyle, TextStyle } from 'react-native';

import { useAnimation } from 'hooks/useAnimation';

import labelComponentStyles from './Label.styles';
import LabelProps from './Label.types';

const labelAnimationDuration = 200;

const Label: React.FC<LabelProps> = ({
  disabled = false,
  label,
  open,
  onLabelClick,
  wrapperStyles = {},
  textStyles = {},
  animatedValues = {},
  duration = labelAnimationDuration,
}) => {
  const { labelStyles: text, wrapperStyles: wrapper } = labelComponentStyles();

  const { topValueStart, topValueEnd, leftValueStart, leftValueEnd, fontValueStart, fontValueEnd } =
    useMemo(
      () => ({
        topValueStart: -23,
        topValueEnd: 0,
        leftValueStart: 10,
        leftValueEnd: 10,
        fontValueStart: 0.9,
        fontValueEnd: 1,
        ...animatedValues,
      }),
      [animatedValues]
    );

  const [topValue, topAnimStart, topAnimEnd] = useAnimation(topValueStart, topValueEnd, duration);
  const [leftValue, leftAnimStart, leftAnimEnd] = useAnimation(
    leftValueStart,
    leftValueEnd,
    duration
  );
  const [fontValue, fontAnimStart, fontAnimEnd] = useAnimation(
    fontValueStart,
    fontValueEnd,
    duration
  );

  const labelWrapperStyles = useMemo(
    () => ({
      transform: [
        {
          translateX: leftValue,
        },
        {
          translateY: topValue,
        },
      ],
      ...wrapper,
      ...wrapperStyles,
    }),
    [leftValue, topValue, wrapper, wrapperStyles]
  );

  const labelTextStyles = useMemo(
    () => ({
      transform: [
        {
          scale: fontValue,
        },
      ],
      ...text,
      ...textStyles,
    }),
    [fontValue, text, textStyles]
  );

  useEffect(() => {
    if (open) {
      Animated.parallel([topAnimEnd, leftAnimEnd, fontAnimEnd]).start();
    } else {
      Animated.parallel([topAnimStart, leftAnimStart, fontAnimStart]).start();
    }
  }, [fontAnimEnd, fontAnimStart, leftAnimEnd, leftAnimStart, open, topAnimEnd, topAnimStart]);

  return (
    <Animated.View style={labelWrapperStyles}>
      <Pressable disabled={disabled} onPress={onLabelClick}>
        <Animated.Text style={labelTextStyles}>{label}</Animated.Text>
      </Pressable>
    </Animated.View>
  );
};

export default memo(Label);
