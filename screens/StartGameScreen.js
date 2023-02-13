import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import { Title, Card, InstructionText, PrimaryButton } from '../components/ui';
import Colors from '../constants/colors';

export default function StartGameScreen({ onConfirm }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const { width, height } = useWindowDimensions();

  function inputChangeHandler(value) {
    setEnteredNumber(value);
  }

  function resetHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    if (isNaN(+enteredNumber) || +enteredNumber <= 0) {
      Alert.alert('Invalid Number', 'Number must be between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetHandler },
      ]);
      return;
    }
    onConfirm(+enteredNumber);
  }

  const marginTop = height < 400 ? 36 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCorrect={false}
              onChangeText={inputChangeHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },

  numberInput: {
    height: 50,
    width: 50,
    marginVertical: 16,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    fontSize: 32,
    color: Colors.accent500,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
});
