import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native"

const Hero = () => {
    return (
        <ImageBackground source={require('../assets/cities/tokyo3.png')} style={styles.lolo}>
            <Text>hola</Text>
        </ImageBackground>

    )
}

export default Hero

const styles = StyleSheet.create({
    lolo: {
        width: '100%',
        height: Dimensions.get('window').height,
        marginBottom: 60
    }
})