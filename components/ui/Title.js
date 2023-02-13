import { StyleSheet, Text, Dimensions, Platform } from 'react-native';

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  title: {
    width: 300,
    maxWidth: '80%',
    padding: deviceWidth < 400 ? 12 : 20,
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth < 400 ? 18 : 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: 'white',
  },
});
