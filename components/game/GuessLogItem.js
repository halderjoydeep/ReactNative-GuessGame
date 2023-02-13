import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Computer's guess: {guess}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: deviceWidth < 400 ? 8 : 12,
    marginVertical: 10,
    borderWidth: deviceWidth < 400 ? 1 : 3,
    borderRadius: 40,
    borderColor: Colors.primary800,
    backgroundColor: Colors.accent500,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  itemText: {
    fontFamily: 'open-sans',
  },
});
