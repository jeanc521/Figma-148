import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';


export default function HomeScreen() {
  const [entrar, setEntrar] = useState("")

  const onPress = () => {
    router.push("/(tabs)/list")
  }

  return (
    <>
    <SafeAreaView>
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
    borderRadius: 5,
    borderWidth: 5,
    margin: 10, 
   
    
  }
});
