import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native';



export default function NotFoundScreen() {
  return (
    <>
      <ScrollView>
        <Stack.Screen options={{ title: 'Oops!' }} />
        <ImageBackground style={styles.image} source={require('../assets/images/error_rick.jpg')} resizeMode="cover">
          <View style={styles.container}>
            <Text style={styles.text}>404</Text>
            <Text style={styles.textButton}>Not Found</Text>
            <Link href="/" style={styles.link}>
              <Text style={styles.textButton}>Go to home screen</Text>
            </Link>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,

  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },

  text: {
    fontSize: 100,
    color: "white"
  },

  textButton:{
    fontSize: 20,
    color: "#ff1493"
  },

  image: {
    width: 200,
    height: 150
  }
});
