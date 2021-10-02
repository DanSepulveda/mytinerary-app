import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';

const Information = () => {
    let cards = [
        {
            title: "Quality",
            content:
                "MyTinerary is certified by the Japanese Ministry of Land, Infrastructure, Transport and Tourism, and our commitment to professional staff development has been recognised with an education award in Japan.",
            img: "https://mytinerary-dansep.herokuapp.com/assets/quality.png",
        },
        {
            title: "Price",
            content:
                "We are happy to offer our clients the best rates on our itineraries, transfers, food and other services. We have several contracts with some suppliers, so we can offer you a lower price",
            img: "https://mytinerary-dansep.herokuapp.com/assets/price.png",
        },
        {
            title: "Support",
            content:
                "We know that there is no unique way to make a perfect trip because each person has his special needs and desires. We always listen to you first and then suggest the best itinerary for you",
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
        marginBottom: 50
        // backgroundColor: 'red',
    },
    card: {
        width: '90%',
        // backgroundColor: 'blue',
        flexDirection: 'row',
        marginBottom: 30,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        elevation: 5,
    },
    cardImage: {
        width: 70,
        height: 70,
        marginRight: 15
    },
    description: {
        flexShrink: 1,
    }
})