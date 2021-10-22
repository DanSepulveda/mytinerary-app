import React from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';

import Hero from '../components/Hero';
import Information from '../components/Information';
import HomeCarousel from '../components/Carousel';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Hero />
                <Text style={styles.title}>Why Choose US</Text>
                <Information />
                <CallToAction props={props} />
                <Text style={styles.title}>Popular Mytineraries</Text>
                <HomeCarousel />
                <Footer />
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eee'
    },
    scrollView: {
        width: '100%',
    },
    title: {
        color: '#444',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 30,
        borderBottomWidth: 2,
        borderBottomColor: '#df5e5e',
        marginHorizontal: 50,
        fontFamily: 'Nunito_900Black'
    }
})