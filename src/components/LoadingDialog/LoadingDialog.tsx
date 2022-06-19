import React, { FC, memo } from 'react';
import { ActivityIndicator, Modal, Text, View } from 'react-native';

import useTheme from 'utils/themeProvider/useTheme';

import getLoadingDialogStyles from './LoadingDialog.styles';
import LoadingDialogProps from './LoadingDialog.types';

const LoadingDialog: FC<LoadingDialogProps> = ({ size = 54, visible = false, title = '' }) => {
  const [theme] = useTheme();

  const { wrapperOuterStyles, wrapperInnerStyles, titleStyles } = getLoadingDialogStyles(
    theme,
    Boolean(title)
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      supportedOrientations={['portrait', 'landscape']}
      statusBarTranslucent>
      <View style={wrapperOuterStyles}>
        <View style={wrapperInnerStyles}>
          <ActivityIndicator color={theme.colors.primary} size={size} />
          {title ? <Text style={titleStyles}>{title}</Text> : <></>}
        </View>
      </View>
    </Modal>
  );
};

export default memo(LoadingDialog);
