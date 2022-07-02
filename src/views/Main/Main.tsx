import { useNavigation } from '@react-navigation/native';
import COLORS from 'assets/styles/COLORS';
import ThemedTextfield from 'components/ThemedTextfield';
import { LinearGradient } from 'expo-linear-gradient';
import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { RootStackParamList, RootStackScreenProps } from '../../../Routs';
import ReceiveSharingIntent from 'react-native-receive-sharing-intent';
import { IReturnData } from 'react-native-receive-sharing-intent/lib/typescript/ReceiveSharingIntent.interfaces';

type MainProps = RootStackScreenProps<'Main'>;

const Main: FC<MainProps> = ({ navigation }) => {
  const [uri, setUri] = useState('');

  ReceiveSharingIntent.getReceivedFiles(
    (files: IReturnData[]) => {
      console.log(files);
      // print error
      if (files.length > 1) return;
      const { weblink } = files[0];
      // print error
      if (!weblink) return;
      console.log('push');
      console.log(weblink);
      navigation.push('Pip', { uri: weblink });
    },
    (error: unknown) => {
      // print error
      console.log(error);
    },
    'ShareMedia'
  );

  const isDisabled = uri === '';

  const handleInputChange = useCallback(({ name, value }) => {
    setUri(value);
  }, []);

  const handleFormSubmit = useCallback(() => {
    if (isDisabled) return;
    console.log(uri);
    navigation.push('Pip', { uri });
  }, [navigation, uri, isDisabled]);

  return (
    <LinearGradient
      colors={[COLORS.backgroundStart, COLORS.backgroundEnd]}
      style={mainStyles.container}>
      <Text style={mainStyles.title}>Pip Runner</Text>

      <ThemedTextfield
        name="uri"
        label="Podaj adres url"
        value={uri}
        onChange={handleInputChange}
        inputStyles={mainStyles.input}
        wrapperStyles={mainStyles.inputWrapper}
        containerStyles={mainStyles.inputContainer}
        boxStyles={mainStyles.inputBox}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={isDisabled}
        onPress={handleFormSubmit}
        style={mainStyles.submitButtonContainer}>
        <Text style={mainStyles.submitButtonText}>Uruchom jako obraz w obrazie</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const mainStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'Lato',
    textAlign: 'center',
    marginBottom: 30,
    color: COLORS.secondary,
  },
  inputWrapper: {
    marginBottom: Platform.OS === 'android' ? 10 : 20,
  },
  inputContainer: {},
  inputBox: {
    borderColor: COLORS.secondary,
    backgroundColor: COLORS.primary,
  },
  input: {
    fontFamily: 'Lato',
    color: COLORS.secondary,
  },
  submitButtonContainer: {
    backgroundColor: COLORS.secondary,
    elevation: 5,
    shadowColor: COLORS.secondary,
    borderRadius: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },
  submitButtonText: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.accent,
  },
});

export default memo(Main);
