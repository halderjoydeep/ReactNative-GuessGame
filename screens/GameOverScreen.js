import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Title, PrimaryButton } from '../components/ui';
import Colors from '../constants/colors';

export default function GameOverScreen({
  totalRounds,
  userNumber,
  onStartNewGame,
}) {
  return (
    <View style={styles.rootScreen}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{' '}
        <Text style={styles.highlightText}>{totalRounds}</Text> rounds to guess
        the number <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;
const imageWidth = deviceWidth < 400 ? 200 : 300;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  imageContainer: {
    width: imageWidth,
    height: imageWidth,
    margin: deviceWidth < 400 ? 20 : 36,
    borderRadius: imageWidth / 2,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: deviceWidth < 400 ? 18 : 24,
    textAlign: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  highlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
