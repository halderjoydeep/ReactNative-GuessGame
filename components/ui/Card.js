import { StyleSheet, View, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    maxWidth: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 400 ? 20 : 36,
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
