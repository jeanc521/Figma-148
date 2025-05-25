import { useEffect, useState } from 'react';
import {  StyleSheet,  SafeAreaView, FlatList, TouchableOpacity,Text, View } from 'react-native';
// import { Item } from '@/components/item';
import { ScrollView } from 'react-native';
import { router } from 'expo-router';
import Card from '../../components/card';



interface Character {
id: string;
 name: string;
 status: string;
 species: string;
 gender: string;
 image: string;
}

const onPress = () => {
  router.push("/(tabs)/explore")
}


const  TabTwoScreen = () => {
  const [character, setCharacter] = useState<Character[]>([])
  
useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => setCharacter(data.results))
  },[])

  return (
    <ScrollView>
    <SafeAreaView>
     <SafeAreaView style={styles.container}>
      {character.map(char => (
        <Card key={char.image} character={char} />
      ))}
      <View style={styles.footer}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>PROXIMA PAGINA</Text>
      </TouchableOpacity>
      </View>
    
  </SafeAreaView>
   </SafeAreaView>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7fffd4",
    gap: 15,
  },

  footer: {
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 10
  },

  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 10,
    borderRadius: 5,
    alignItems: "flex-end"
  },

  buttonText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold"
  }
})

export default TabTwoScreen