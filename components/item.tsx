
import { Image } from 'expo-image'
import { StyleSheet, Text, View } from 'react-native'

export const Item = ({name, age, descricao, image}: {name: string, age: string, descricao: string, image: string}) => {
    return(
        <View style={styles.list}>
            <Image style={styles.imageStyle} source={image} alt={name}/>
            <Text>{name}</Text>
            <Text>{age}</Text>
            <Text>{descricao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: "#7fffd4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    imageStyle: {
        width: 200,
        height: 200,
       
    }
})