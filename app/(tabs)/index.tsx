import { StyleSheet, Text } from 'react-native';


export default function HomeScreen() {
  return (
    <Text style={styles.fundo}>INDEX principal das tabs do segundo layout</Text>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: "blue"
  }
});
