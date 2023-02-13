import { StyleSheet, Text, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontFamily: 'open-sans',
    fontSize: deviceWidth < 400 ? 18 : 28,
    textAlign: 'center',
  },
});
