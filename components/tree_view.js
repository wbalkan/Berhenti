import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { Svg } from 'react-native-svg';

export default function App() {
  const title = 'Your Tree'
  const subtitle = 'Tap on the branches of your tree whenever you experience triggers.'
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.subtitleText}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E7E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: 'semibold',
  },
});
