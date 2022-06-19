import { ExpoConfig, ConfigContext } from '@expo/config';

import COLORS from './src/assets/styles/COLORS.js';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'widget-runner',
  description: 'Run url in widget',
  slug: 'widget-runner',
  version: '1.0.0',
  orientation: 'default',
  icon: './src/assets/images/icon.png',
  primaryColor: COLORS.primary,
  backgroundColor: COLORS.primary,
  androidNavigationBar: {
    backgroundColor: COLORS.secondary,
    barStyle: 'light-content',
  },
  splash: {
    backgroundColor: COLORS.primary,
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  userInterfaceStyle: 'dark',
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    icon: './src/assets/images/icon.png',
    adaptiveIcon: {
      foregroundImage: './src/assets/images/icon.png',
      backgroundColor: COLORS.primary,
    },
    package: 'com.jacobkalabanga.piprunner',
  },
});
