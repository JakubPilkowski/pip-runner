import COLORS from 'assets/styles/COLORS';
import Error from 'components/Error';
import Loader from 'components/Loader';
import { LinearGradient } from 'expo-linear-gradient';
import React, { FC, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';
import { RootStackScreenProps } from '../../../Routs';

type PipProps = RootStackScreenProps<'Pip'> & {
  uri: string;
};

const originWhitelist = ['*'];

const Pip: FC<PipProps> = ({ uri }) => {
  const tmpUrl = 'https://www.youtube.com/watch?v=O7mNMvMT4Cs&t=3725s';
  return (
    <WebView
      containerStyle={pipStyles.container}
      originWhitelist={originWhitelist}
      source={{ uri: tmpUrl }}
      // allow fullscreen in android
      allowsFullscreenVideo
      // allow fullscreen in ios
      allowsInlineMediaPlayback
      // dont store any data
      incognito
      // indicates that we want to have loader
      startInLoadingState
      renderLoading={() => (
        <LinearGradient
          colors={[COLORS.backgroundStart, COLORS.backgroundEnd]}
          style={pipStyles.loaderContainer}>
          <Loader />
        </LinearGradient>
      )}
      // render error
      renderError={(errorMessage) => (
        <LinearGradient
          colors={[COLORS.backgroundStart, COLORS.backgroundEnd]}
          style={pipStyles.errorContainer}>
          <Error message={errorMessage || 'WebView render error'} />
        </LinearGradient>
      )}
    />
  );
};

const pipStyles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  loaderContainer: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    width: '100%',
    height: '100%',
    padding: 40,
  },
  errorContainer: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    width: '100%',
    height: '100%',
    padding: 40,
  },
});

export default memo(Pip);
