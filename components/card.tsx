// components/Card.tsx
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Card({ character }: { character: { name: string, image: string, gender: string, status: string } }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} resizeMode="cover" />
      <Text style={styles.text}>{character.name}</Text>
      <Text>{character.gender}</Text>
      <Text>{character.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ff1493",
    padding: 10,
    borderRadius: 5,
    margin: 20,
    alignItems: "center"
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 10
  },
  text: {
    fontWeight: "bold",
    fontSize: 16
  }
});
