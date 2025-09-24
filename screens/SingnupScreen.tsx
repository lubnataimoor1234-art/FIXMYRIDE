import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
 import Colors from '../constants/colors';
import Strings from '../constants/strings';
import Fonts from '../constants/fonts';


const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Strings.signupTitle}</Text>

      <TextInput
        style={styles.input}
        placeholder={Strings.emailPlaceholder}
        placeholderTextColor={Colors.text}
      />

      <TextInput
        style={styles.input}
        placeholder={Strings.passwordPlaceholder}
        secureTextEntry
        placeholderTextColor={Colors.text}
      />

      <TextInput
        style={styles.input}
        placeholder={Strings.confirmPasswordPlaceholder}
        secureTextEntry
        placeholderTextColor={Colors.text}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{Strings.signupButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: Fonts.bold,
    marginBottom: 20,
    color: Colors.text,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: Colors.inputBorder,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    fontFamily: Fonts.regular,
    marginBottom: 15,
    color: Colors.text,
    backgroundColor: Colors.white,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
});
