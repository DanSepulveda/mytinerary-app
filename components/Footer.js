import React from "react"
import { StyleSheet, View, ImageBackground } from "react-native"

const Footer = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../assets/logof.png')}>
            </ImageBackground>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#444',
        paddingVertical: 15,
        alignItems: 'center'
    },
    image: {
        width: 170,
        height: 30
    }
})