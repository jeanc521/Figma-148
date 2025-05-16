import { useEffect, useState } from 'react';
import {  StyleSheet,  SafeAreaView, FlatList } from 'react-native';
import { Item } from '@/components/item';

interface Character {
id: string;
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
     <FlatList data={character} renderItem={({item}) => (
      <Item name={item.name} age={item.status} descricao={item.gender} image={item.image}/>
     )}  
     keyExtractor={(item) => item.id}
     />
   </SafeAreaView>
  );
}



export default TabTwoScreen