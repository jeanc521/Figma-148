import {  StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import data from '@/constants/data';
import { Item } from '@/components/item';
import { ScrollView } from 'react-native';





export default function explore() {
  


  return (
   <>
   <ScrollView>
    <View style={styles.center}>
                <Text>Lista</Text>
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList
                 style={styles.back}
                 data={data}
                 renderItem={({item}) => (
                    <Item name={item.nome} age={item.idade} descricao={item.descricao} image={item.imagem}/>
                )}
                 keyExtractor={(item) => item.id}
                 horizontal={true}
                 showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
   </ScrollView>
   </>
  );
}

const styles = StyleSheet.create({
  center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        paddingVertical: 20
  },

  container: {
      flex: 1
  },

  back: {
    paddingHorizontal: 20
  }

});


