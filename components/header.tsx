import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'

export const Header = ({image} : {image: ImageSourcePropType}) => {
    return(
        <View style={styles.background}>
            <Text>Header</Text>
            <Image source={image}/>
        </View>
    )
}


const styles = StyleSheet.create({
    background: {

    }
})