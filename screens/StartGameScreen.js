import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

export default function StartGameScreen({ onConfirm }) {
  const [enteredNumber, setEnteredNumber] = useState('');

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

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>

      <Card>
        <InstructionText style={styles.instructionText}>
          Enter a number
        </InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={inputChangeHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
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
