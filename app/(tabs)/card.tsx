import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";

interface Character {
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
}


export const Card = ({character} : {character : Character}) => {
    return(
        <View>
            <View>
            <Image src={character.image}/>
            <Text>{character.name}</Text>
            <Text>{character.status}</Text>
            <Text>{character.species}</Text>
            <Text>{character.gender}</Text>
            </View>
        </View>
    )
}
