import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const CallToAction = ({ props }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.ninja} source={{ uri: "https://mytinerary-dansep.herokuapp.com/assets/ninja.png" }} />
            <Text style={styles.text}>You are one step closer for making your dreams come true!</Text>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Cities')}>
                <Text style={styles.buttonText}>Start Now</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CallToAction

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignItems: 'center',
        marginBottom: 60,
        borderWidth: 2,
        borderColor: '#df5e5e',
        alignSelf: 'center',
        paddingVertical: 40
    },
    ninja: {
        width: 150,
        height: 150,
        marginBottom: 20
    },
    text: {
        width: '80%',
        flexShrink: 1,
        flexWrap: 'wrap',
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'Nunito_400Regular'
    },
    button: {
        backgroundColor: '#df5e5e',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#8f3b3b'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Nunito_900Black'
    }
})