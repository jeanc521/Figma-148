
import { Image } from 'expo-image'
import { StyleSheet, Text, View } from 'react-native'

export const Item = ({name, age, descricao, image}: {name: string, age: string, descricao: string, image: string}) => {
    return(
        <View style={styles.list}>
            <Image style={styles.imageStyle} source={image} alt={name}/>
            <Text>name: {name}</Text>
            <Text>status: {age}</Text>
            <Text>gender: {descricao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
         display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#4168a4d4",
        margin: 10,
        height: 80,
        paddingHorizontal: 10,
        gap: 15
    },

    imageStyle: {
        width: 50,
        height: 50,
        gap: 1000,
        borderRadius: 100,
        borderColor: "black" 
    }
})