import React, { useState } from 'react'
import { View, StyleSheet, Text, SafeAreaView, StatusBar, Platform, Dimensions, ImageBackground, ScrollView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const HomeCarousel = () => {
    const items = [
        {
            src: require("../assets/cities/kamakura.png"),
            name: "Kamakura",
        },
        {
            src: require("../assets/cities/kobe.png"),
            name: "Kobe",
        },
        {
            src: require("../assets/cities/kyoto.png"),
            name: "Kyoto",
        },
        {
            src: require("../assets/cities/nagasaki.png"),
            name: "Nagasaki",
        },
        {
            src: require("../assets/cities/nara.png"),
            name: "Nara",
        },
        {
            src: require("../assets/cities/okinawa.png"),
            name: "Okinawa",
        },
        {
            src: require("../assets/cities/osaka.png"),
            name: "Osaka",
        },
        {
            src: require("../assets/cities/tokyo.png"),
            name: "Tokyo",
        },
        {
            src: require("../assets/cities/yokohama.png"),
            name: "Yokohama",
        },
        {
            src: require("../assets/cities/sapporo.png"),
            name: "Sapporo",
        },
        {
            src: require("../assets/cities/hiroshima.png"),
            name: "Hiroshima",
        },
        {
            src: require("../assets/cities/kumamoto.png"),
            name: "Kumamoto",
        },
    ];
    const [slide, setSlide] = useState(0)
    const sliderWidth = Dimensions.get('screen').width - 30
    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide} key={index}>
                <ImageBackground source={item.src} style={styles.background}>
                    <Text style={styles.cityName}>{item.name}</Text>
                </ImageBackground>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Carousel
                layout={'default'}
                data={items}
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
                dotsLength={items.length}
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

export default HomeCarousel

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    slide: {
        width: '100%',
        alignItems: 'center'
    },
    background: {
        width: '100%',
        height: 300,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 15,
        overflow: 'hidden'
    },
    cityName: {
        width: '100%',
        color: 'white',
        backgroundColor: '#000000a1',
        textAlign: 'center',
        padding: 5,
        fontSize: 25
    }
})