import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';
import getErrorStyles from './Error.styles';
import ErrorProps from './Error.types';

const Error: FC<ErrorProps> = ({ message }) => {
  if (!message) return <></>;

  const { messageStyles, wrapperStyles } = getErrorStyles();

  return (
    <View style={wrapperStyles}>
      <Text style={messageStyles}>{message}</Text>
    </View>
  );
};

export default memo(Error);
