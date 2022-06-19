import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Animated, Platform, StyleSheet, Text } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import COLORS from 'assets/styles/COLORS';
import Routs from './Routs';

const AnimatedSplashScreen = () => {
  const animation = useMemo(() => new Animated.Value(1), []);

  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();

    Animated.timing(animation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setAnimationComplete(true);
    });
  }, [animation]);

  if (isSplashAnimationComplete) {
    return null;
  }

  return (
    <Animated.View
      style={[StyleSheet.absoluteFill, animatedSplashStyles.container, { opacity: animation }]}
      onLayout={onLayoutRootView}>
      <Text style={animatedSplashStyles.title}>Widget Runner</Text>
    </Animated.View>
  );
};

const animatedSplashStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  title: {
    fontFamily: 'Lato',
    fontSize: 48,
    // marginBottom: 10,
    color: COLORS.secondary,
    fontWeight: 'bold',
  },
});

const App = () => {
  const [isAppReady, setAppReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Lato: require('./src/assets/fonts/LatoRegular.ttf'),
        });
      } catch (err: unknown) {
        console.log(err);
      } finally {
        setAppReady(true);
      }
    }

    prepare();
  });
  if (!isAppReady) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.backgroundStart}
        style={Platform.OS === 'android' ? 'auto' : 'light'}
      />
      <Routs />
      <AnimatedSplashScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});
