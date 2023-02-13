import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: deviceWidth < 400 ? 14 : 20,
    padding: deviceWidth < 400 ? 14 : 20,
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    backgroundColor: '#333',
  },
  text: {
    color: Colors.accent500,
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth < 400 ? 20 : 32,
  },
});
