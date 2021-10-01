import React, { useRef } from 'react'
import { View, StyleSheet, Text, SafeAreaView, StatusBar, Platform, Dimensions, ImageBackground, ScrollView } from 'react-native';

import Hero from '../components/Hero';
import HomeCarousel from '../components/Carousel';
// import { StatusBar } from 'expo-status-bar';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Hero />
                <Text style={styles.title}>Why Choose US</Text>
                <Text style={styles.title}>Popular Mytineraries</Text>
                <HomeCarousel />
                <HomeCarousel />
                <HomeCarousel />
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'green'
    },
    scrollView: {
        width: '100%',
        color: 'black'
    },
    title: {
        color: '#444',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 15,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: '#df5e5e'
    }
})