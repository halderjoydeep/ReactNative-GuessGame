import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../constants/colors';

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    padding: 20,
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    backgroundColor: '#333',
  },
  text: {
    color: Colors.accent500,
    fontFamily: 'open-sans-bold',
    fontSize: 32,
  },
});
