import { Item } from "@/components/item"
import data from "@/constants/data"
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"

export default function List(){
    return(
        <>
        <View style={styles.center}>
            <Text>lista</Text>
        </View>
        <SafeAreaView style={styles.container}>
            <FlatList style={styles.back} data={data} renderItem={({item}) => (
                <Item name={item.nome} age={item.idade} descricao={item.descricao} image={item.imagem}/>
            )}/>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    center: {

    },

    container: {

    },

    back: {

    }
})      