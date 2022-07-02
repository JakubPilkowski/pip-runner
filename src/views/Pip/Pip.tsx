import React, { FC, memo, useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import WebView from 'react-native-webview';
import { LinearGradient } from 'expo-linear-gradient';

import usePip from 'hooks/usePip';

import Error from 'components/Error';
import Loader from 'components/Loader';

import COLORS from 'assets/styles/COLORS';
import PipIcon from 'assets/svgs/PipIcon';

import { RootStackScreenProps } from '../../../Routs';

type PipProps = RootStackScreenProps<'Pip'>;

const originWhitelist = ['*'];

const Pip: FC<PipProps> = ({ route }) => {
  const { uri } = route.params;
  const [hasError, setError] = useState(false);

  const [isPipOpen, open] = usePip({
    aspectRatio: { numerator: 16, denominator: 9 },
    autoEnterEnabled: !hasError,
  });

  const handlePipOpen = useCallback(() => {
    open();
  }, [open]);

  return (
    <>
      {!isPipOpen && !hasError && (
        <TouchableOpacity activeOpacity={0.8} style={pipStyles.pip} onPress={handlePipOpen}>
          <PipIcon />
        </TouchableOpacity>
      )}
      {uri ? (
        <WebView
          originWhitelist={originWhitelist}
          source={{ uri }}
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
              <Loader size={64} title="Ładowanie linku..." />
            </LinearGradient>
          )}
          onError={() => {
            setError(true);
            console.log('on error');
          }}
          onHttpError={() => {
            setError(true);
            console.log('on http error');
          }}
          // render error
          renderError={(errorMessage) => (
            <LinearGradient
              colors={[COLORS.backgroundStart, COLORS.backgroundEnd]}
              style={pipStyles.errorContainer}>
              <Error message={errorMessage || 'WebView render error'} />
            </LinearGradient>
          )}
        />
      ) : (
        <LinearGradient
          colors={[COLORS.backgroundStart, COLORS.backgroundEnd]}
          style={pipStyles.container}>
          <Error message={'No uri provided'} />
        </LinearGradient>
      )}
    </>
  );
};

const pipStyles = StyleSheet.create({
  pip: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.error,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 50,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 40,
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
