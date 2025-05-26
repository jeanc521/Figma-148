
import { Image } from 'expo-image'
import { StyleSheet, Text, View } from 'react-native'

export const Item = ({ name, age, descricao, image }: { name: string, age: string, descricao: string, image: string }) => {
    return (
        <View style={styles.itemList}>
            <Image style={styles.imageStyle} source={image} alt={name} />
            <Text>name: {name}</Text>
            <Text>status: {age}</Text>
            <Text>gender: {descricao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemList: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#ff1493",
        margin: 10,
        height: 80,
        paddingHorizontal: 10,
         gap: 10,
    },

    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 100,
        borderColor: "black"
    }
})