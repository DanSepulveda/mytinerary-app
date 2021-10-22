import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';

const Information = () => {
    let cards = [
        {
            title: "Quality",
            content:
                "MyTinerary is certified by the Japanese Ministry of Land, Infrastructure, Transport and Tourism.",
            img: "https://mytinerary-dansep.herokuapp.com/assets/quality.png",
        },
        {
            title: "Price",
            content:
                "We are happy to offer our clients the best rates on our itineraries, transfers, food and other services.",
            img: "https://mytinerary-dansep.herokuapp.com/assets/price.png",
        },
        {
            title: "Support",
            content:
                "We know that there is no unique way to make a perfect trip so we always suggest the best itinerary for you",
            img: "https://mytinerary-dansep.herokuapp.com/assets/support.png",
        },
    ];

    return (
        <View style={styles.container}>
            {cards.map(card => {
                return (
                    <View style={styles.card} key={card.title}>
                        <Image source={{ uri: card.img }} style={styles.cardImage} />
                        <Text style={styles.description}>{card.content}</Text>
                    </View>
                )
            })}
        </View>
    )
}

export default Information

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 50,
    },
    card: {
        width: '90%',
        flexDirection: 'row',
        marginBottom: 30,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOpacity: 0.25,
        elevation: 5,
    },
    cardImage: {
        width: 70,
        height: 70,
        marginRight: 15
    },
    description: {
        flexShrink: 1,
        fontFamily: 'Nunito_400Regular',
        fontSize: 16,
        textAlign: 'justify'
    }
})