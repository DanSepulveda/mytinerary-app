// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ImageBackground, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions'
import Nocity from '../components/Nocity';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../components/Footer';

const Cities = (props) => {
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        props.allCities.length === 0 && props.getCities()
        setLoader(false)
    }, [])

    if (loader) {
        return (
            <SafeAreaView style={styles.loaderContainer}>
                <Text style={{ fontSize: 50 }}>Cargando</Text>
                <ImageBackground style={styles.prueba} source={{ uri: "https://mytinerary-dansep.herokuapp.com/assets/loader.gif" }}></ImageBackground>
            </SafeAreaView>
        )
    }

    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide} key={index}>
                <TouchableOpacity onPress={() => props.navigation.navigate('city', { id: item._id })}>
                    <ImageBackground source={{ uri: `https://mytinerary-dansep.herokuapp.com/${item.src}` }} style={styles.background}>
                        <Text style={styles.title}>{item.name}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.imageHero} source={{ uri: 'https://mytinerary-dansep.herokuapp.com/assets/banner.png' }} resizeMode="cover" />
            <TextInput placeholder="Choose your destination..." style={styles.searcher} onChange={(e) => props.getFiltered(e.nativeEvent.text)} />
            {props.cities.length === 0
                ? <Nocity />
                : <FlatList data={props.cities} renderItem={_renderItem} keyExtractor={item => item._id} style={styles.list} />
            }
        </SafeAreaView>
    )

}

const mapStateToProps = (state) => {
    return {
        allCities: state.cities.allCities,
        cities: state.cities.filteredCities
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getList,
    getFiltered: citiesActions.getFilteredList
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)

const pictureWidth = Dimensions.get('screen').width * 0.9
const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: '100%',
    },
    container: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 300,
    },
    imageHero: {
        width: '100%',
        height: 200,
        marginBottom: 30,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        elevation: 5,
    },
    slide: {
        borderRadius: 20,
        overflow: 'hidden'
    },
    title: {
        backgroundColor: 'rgba(173, 169, 150, 0.5)',
        width: '100%',
        paddingVertical: 30,
        textAlign: 'center',
        fontSize: 35,
        fontFamily: 'Nunito_600SemiBold',
        textTransform: 'uppercase'
    },
    background: {
        alignSelf: 'center',
        width: pictureWidth,
        height: pictureWidth - 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: 20,
        overflow: 'hidden'
    },
    list: {
        width: '100%',
    },
    prueba: {
        width: 200,
        height: 200
    },
    searcher: {
        width: '80%',
        height: 40,
        padding: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: "#df5e5e",
        alignSelf: "center",
        borderStyle: "solid",
        color: '#444',
        marginBottom: 30
    }
})
