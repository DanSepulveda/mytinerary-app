import React from 'react'
import { Image, StyleSheet, Text, View } from "react-native"
const Nocity = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://mytinerary-dansep.herokuapp.com/assets/sad-panda.png" }} resizeMode="cover" style={styles.image} />
            <Text style={styles.title}>We're so sorry.</Text>
            <Text style={styles.subtitle}>No matches found</Text>
            <Text style={styles.description}>Please try another search</Text>
        </View>
    )
}

export default Nocity

const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: '#ccc',
        alignItems: 'center',
        borderRadius: 15,
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image: {
        width: 120,
        height: 120
    },
    title: {
        fontSize: 35,
        fontFamily: 'Nunito_900Black',
        color: '#8f3b3b'
    },
    subtitle: {
        fontSize: 25,
        color: '#df5e5e'
    },
    description: {
        fontSize: 20,
        color: '#8f3b3b'
    }
})