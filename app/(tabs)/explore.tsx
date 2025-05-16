import { useEffect, useState } from 'react';
import {  StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import { Image } from 'expo-image';
import { Item } from '@/components/item';
import { FlatList } from 'react-native';
import data from '@/constants/data';

interface Character {
 name: string;
 status: string;
 species: string;
 gender: string;
 image: string;
}


const  TabTwoScreen = () => {
  const [character, setCharacter] = useState<Character[]>([])
  
useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => setCharacter(data.results))
  },[])

  return (
   <SafeAreaView>
     <FlatList data={data} renderItem={({item}) => (
      <Item name={item.nome} age={item.idade} descricao={item.descricao} image={item.imagem}/>
     )}  
     keyExtractor={(item) => item.id}
     />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});


export default TabTwoScreen