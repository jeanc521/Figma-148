
import { Image } from 'expo-image'
import { StyleSheet, Text, View } from 'react-native'

export const Item = ({name, age, descricao, image}: {name: string, age: string, descricao: string, image: string}) => {
    return(
        <View style={styles.list}>
            <Image style={styles.imageStyle} source={image}/>
            <Text>{name}</Text>
            <Text>{age}</Text>
            <Text>{descricao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {

    },

    imageStyle: {

    }
})