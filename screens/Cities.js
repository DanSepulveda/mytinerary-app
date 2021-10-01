// import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions'

const Cities = (props) => {
    useEffect(() => {
        props.getCities()
    }, [])

    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide} key={index}>
                <ImageBackground source={item.src} style={styles.background}>
                    <Text style={styles.title}>{item.name}</Text>
                </ImageBackground>
            </View>
        );
    }

    return (
        <SafeAreaView>
            <FlatList />
        </SafeAreaView>
    )

}

const mapStateToProps = (state) => {
    return {
        cities: state.cities.allCities
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getList
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)

// const styles = StyleSheet.create({

// })
