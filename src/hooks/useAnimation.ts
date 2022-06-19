import { useMemo, useRef } from 'react';
import { Animated } from 'react-native';

export type UseAnimation = [
  Animated.Value,
  Animated.CompositeAnimation,
  Animated.CompositeAnimation
];

export function useAnimation(beginValue: number, endValue: number, duration: number): UseAnimation {
  const animation = useRef(new Animated.Value(beginValue)).current;
  const animationStart = useMemo(
    () =>
      Animated.timing(animation, {
        toValue: endValue,
        duration,
        useNativeDriver: true,
      }),
    [animation, duration, endValue]
  );

  const animationEnd = useMemo(
    () =>
      Animated.timing(animation, {
        toValue: beginValue,
        duration,
        useNativeDriver: true,
      }),
    [animation, beginValue, duration]
  );

  return [animation, animationStart, animationEnd];
}
