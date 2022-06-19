import COLORS from 'assets/styles/COLORS';
import React, { FC, memo } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import getLoadingDialogStyles from './Loader.styles';
import LoaderProps from './Loader.types';

const Loader: FC<LoaderProps> = ({ title, size }) => {
  const { wrapperInnerStyles, titleStyles } = getLoadingDialogStyles(Boolean(title));

  return (
    // <View style={wrapperOuterStyles}>
    <View style={wrapperInnerStyles}>
      <ActivityIndicator color={COLORS.primary} size={size} />
      {title ? <Text style={titleStyles}>{title}</Text> : <></>}
    </View>
    // </View>
  );
};

export default memo(Loader);
