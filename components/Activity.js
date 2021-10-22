import React, { useState } from 'react'
import { View, StyleSheet, Text, SafeAreaView, StatusBar, Platform, Dimensions, ImageBackground, ScrollView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const Activity = (props) => {
    const { activities } = props
    console.log(activities)

    const [slide, setSlide] = useState(0)
    const sliderWidth = Dimensions.get('screen').width - 80

    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide} key={index}>
                <ImageBackground source={{ uri: `https://mytinerary-dansep.herokuapp.com/assets/activities/${item.image}` }} style={styles.background}>
                </ImageBackground>
                <Text style={styles.activityTitle}>{item.title}</Text>
                <Text style={styles.activityDescription}>{item.description}</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Carousel
                layout={'default'}
                data={activities}
                renderItem={_renderItem}
                sliderWidth={sliderWidth}
                itemWidth={sliderWidth}
                autoplay={true}
                enableMomentum={false}
                onBeforeSnapToItem={(index) => setSlide(index)}
                // lockScrollWhileSnapping={true}
                loop={true}
                activeAnimationType={'spring'}
            />
            <Pagination
                dotsLength={activities.length}
                activeDotIndex={slide}
                dotStyle={{
                    width: 7,
                    height: 7,
                    borderRadius: 5,
                    backgroundColor: '#df5e5e'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    )
}

export default Activity

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 15,
    },
    slide: {
        width: '100%',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOpacity: 0.25,
        borderRadius: 15,
        paddingBottom: 20,
        backgroundColor: '#ccc',
    },
    background: {
        width: '100%',
        height: 150,
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow: 'hidden',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    cityName: {
        width: '100%',
        color: 'white',
        backgroundColor: '#000000a1',
        textAlign: 'center',
        padding: 5,
        fontSize: 25
    },
    activityTitle: {
        color: '#444',
        fontFamily: 'Nunito_900Black',
        fontSize: 25,
        marginVertical: 15,
    },
    activityDescription: {
        color: '#444',
        fontFamily: 'Nunito_400Regular',
        fontSize: 18,
        marginHorizontal: 5,
        textAlign: 'center'
    }
})