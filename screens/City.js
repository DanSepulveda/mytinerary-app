import React, { useEffect } from "react"
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import Itinerary from "../components/Itinerary"
import citiesActions from "../redux/actions/citiesActions"
import itinerariesActions from "../redux/actions/itinerariesActions"

const City = (props) => {
    const { src, name } = props.city
    useEffect(() => {
        let listener = props.navigation.addListener('focus', () => {
            props.getCity(props.route.params.id)
            props.getItineraries(props.route.params.id)
        })
        return () => {
            props.navigation.removeListener(listener)
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <ImageBackground style={styles.imageHeader} source={{ uri: `https://mytinerary-dansep.herokuapp.com/${src}` }} resizeMode='cover'>
                    <Text style={styles.title}>{name}</Text>
                </ImageBackground>
                {props.itineraries.map((itinerary) => <Itinerary itinerary={itinerary} key={itinerary._id} />)}
                <TouchableOpacity style={styles.button62} onPress={() => props.navigation.navigate('Cities')}>
                    <Text style={styles.buttonText}>Go Back Cities</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => {
    return {
        city: state.cities.chosenCity,
        itineraries: state.itineraries.itinerariesList
    }
}

const mapDispatchToProps = {
    getCity: citiesActions.getOneCity,
    getItineraries: itinerariesActions.getList
}

export default connect(mapStateToProps, mapDispatchToProps)(City)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eee'
    },
    scrollView: {
        width: '100%',
    },
    imageHeader: {
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    title: {
        color: 'white',
        fontFamily: 'Nunito_900Black',
        fontSize: 60,
        textShadowColor: 'black',
        textShadowRadius: 15
    },
    button62: {
        // backgroundColor: '#df5e5e',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#8f3b3b',
        marginTop: 30,
        width: '50%',
        alignSelf: 'center',
        marginTop: -20,
        marginBottom: 30
    },
    buttonText: {
        color: '#df5e5e',
        fontSize: 20,
        fontFamily: 'Nunito_900Black'
    },
})