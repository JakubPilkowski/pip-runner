import { useNavigation } from '@react-navigation/native';
import COLORS from 'assets/styles/COLORS';
import ThemedTextfield from 'components/ThemedTextfield';
import { LinearGradient } from 'expo-linear-gradient';
import React, { FC, memo, useCallback, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';
import { RootStackParamList, RootStackScreenProps } from '../../../Routs';

type MainProps = RootStackScreenProps<'Main'>;

const Main: FC<MainProps> = ({ navigation }) => {
  const [url, setUrl] = useState('');

  const handleInputChange = useCallback(({ name, value }) => {
    setUrl(value);
  }, []);

  const handleFormSubmit = useCallback(() => {
    navigation.push('Pip');
  }, [navigation]);

  const isDisabled = url === '';

  return (
    <LinearGradient
      colors={[COLORS.backgroundStart, COLORS.backgroundEnd]}
      style={mainStyles.container}>
      <ThemedTextfield
        name="url"
        label="Podaj adres url"
        value={url}
        onChange={handleInputChange}
        inputStyles={mainStyles.input}
        wrapperStyles={mainStyles.inputWrapper}
      />
      <Pressable
        disabled={isDisabled}
        onPress={handleFormSubmit}
        style={mainStyles.submitButtonContainer}>
        <Text style={mainStyles.submitButtonText}>Odpal jako obraz w obrazie</Text>
      </Pressable>
    </LinearGradient>
  );
};

const mainStyles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    flex: 1,
  },
  inputWrapper: {
    marginBottom: Platform.OS === 'android' ? 10 : 20,
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.accent,
  },
});

export default memo(Main);
