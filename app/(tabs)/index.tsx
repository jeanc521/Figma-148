import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import { View } from 'react-native';


export default function HomeScreen() {
  const [entrar, setEntrar] = useState("")

  const onPress = () => {
    router.push("/(tabs)/list")
  }

  return (
    <>
    <SafeAreaView>
    <Image style={styles.images} source={require('@/assets/images/capa.jpg')} resizeMode="cover"/>
    <Text style={styles.fundo}>Rick e Morty é uma série de ficção científica animada 
    que acompanha as aventuras interdimensionais de Rick, um cientista maluco e alcoólatra.</Text>
    <TouchableOpacity  onPress={onPress}>
      <Text style={styles.buttom}>PROXIMA PAGINA</Text>
    </TouchableOpacity>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    padding: 20
  },

  buttom: {
    backgroundColor: "black",
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 10,
    borderRadius: 5,
    alignItems: "flex-end"
    
  },

  images: {
    width: 300,
    height: 500
  }
});
