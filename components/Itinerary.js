import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import itinerariesActions from "../redux/actions/itinerariesActions";
import commentsActions from "../redux/actions/commentsActions";
import { connect } from 'react-redux';
import Activity from '../components/Activity'
import Chat from '../components/Chat'

const Itinerary = (props) => {
    let icons = { drinks: '🍹', wood: '🌲', temple: '🛕', city: '🌇', architecture: '🏛️', friends: '🧑‍🤝‍🧑', dance: '💃', mountain: '⛰️', tradition: '👘', nature: '🍂', shopping: '🛍️', river: '🚤', museum: '🏛️', culture: '📚' }

    const { _id, user, image, title, description, price, duration, tags, likes, comments, } = props.itinerary;

    const [button, setButton] = useState(false);
    const [activities, setActivities] = useState([])
    const [likesAux, setLikesAux] = useState(likes)
    const requestActivities = async () => {
        try {
            let response = await props.getActivities(props.itinerary._id)
            if (response.data.success) {
                setActivities(response.data.response)

            } else {
                //no hay ciudades para mostrar
            }
        } catch (e) {
            //no se puede hacer fetch
        }
    }

    const toogleButton = () => {
        setButton(!button);
        if (!button && !activities.length) {
            requestActivities()
        }
    };

    const generateIcon = (qty, src, src2) => {
        let result = [];
        for (let i = 1; i <= 5; i++) {
            let rute = i <= qty ? src : src2;
            result.push(rute);
        }

        return result.map((icon, index) => (
            <Image
                key={index}
                style={styles.icon}
                source={{ uri: icon }}
            />
        ));
    };

    const addLike = async () => {
        if (props.token) {
            try {
                let response = await props.likeItinerary(_id, props.token)
                setLikesAux(response)
            } catch (e) {
                console.log(e)
            }
        } else {
            ToastAndroid.showWithGravity('You must to be Logged In to like an itinerary.', ToastAndroid.LONG, ToastAndroid.BOTTOM)
        }
    }

    let condition = likesAux.includes(props.userId) ? "/assets/full.png" : "/assets/empty.png"

    return (
        <View style={styles.container}>
            <View style={styles.information}>
                <View>
                    <ImageBackground resizeMode='cover' style={styles.image} source={{ uri: `https://mytinerary-dansep.herokuapp.com/${image}` }} >
                        <Text style={styles.title}>{title}</Text>
                        <TouchableOpacity onPress={addLike} style={styles.likeButton}>
                            <Image source={{ uri: `https://mytinerary-dansep.herokuapp.com/${condition}` }} style={styles.heart} />
                            <Text style={styles.likeNum}>{likesAux.length}</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={styles.itineraryInformation}>
                        <View style={styles.userInformation}>
                            <ImageBackground style={styles.userPic} source={{ uri: `https://mytinerary-dansep.herokuapp.com/${user.picture}` }}>
                            </ImageBackground>
                            <Text style={styles.username}>{user.name}</Text>
                        </View>
                        <View style={styles.tagContainer}>
                            {tags.map((tag) => (
                                <Text key={tag} style={styles.tag}>{`#${tag}${icons[tag]}`}</Text>
                            ))}
                        </View>
                        <Text style={styles.itinenaryDescription}>{description}</Text>
                        <View style={styles.itineraryData}>
                            <View style={styles.priceContainer}>
                                <Text style={styles.price}>Price</Text>
                                <View style={styles.iconContainer}>
                                    {generateIcon(price, 'https://mytinerary-dansep.herokuapp.com/assets/coin.png', 'https://mytinerary-dansep.herokuapp.com/assets/coin-empty.png')}
                                </View>
                            </View>
                            <View style={styles.durationContainer}>
                                <Image style={styles.icon} source={{ uri: 'https://mytinerary-dansep.herokuapp.com/assets/clock.png' }} />
                                <Text style={styles.price}>{duration} hrs.</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.button62} onPress={toogleButton}>
                            <Text style={styles.buttonText}>{button ? 'View Less' : 'View More'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {button &&
                <View style={styles.detailsContainer}>
                    <View style={styles.activitiesContainer}>
                        <Text style={styles.titleMain}>Activities</Text>
                        <Activity activities={activities} />
                    </View>
                    <View>
                        <Text style={styles.titleMain}>Comments</Text>
                        <Chat comments={comments} itineraryId={_id} />
                    </View>
                </View>}
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token,
        userId: state.users.id
    }
}

const mapDispatchToProps = {
    getActivities: itinerariesActions.getActivities,
    likeItinerary: itinerariesActions.likeItinerary,
    deleteComment: commentsActions.deleteComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        marginBottom: 50,
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1.5

    },
    information: {
        borderRadius: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 25,
        fontFamily: 'Nunito_600SemiBold',
        backgroundColor: 'rgba(255, 255, 255, 0.616)',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    likeButton: {
        backgroundColor: '#df5e5e',
        alignSelf: 'flex-end',
        marginRight: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        bottom: 10,
        // zIndex: 5
    },
    heart: {
        width: 40,
        height: 32,
        marginHorizontal: 10
    },
    likeNum: {
        color: 'white',
        paddingVertical: 5,
        marginRight: 10,
        fontSize: 25
    },
    itineraryInformation: {
        alignItems: 'center',
        position: 'relative',
        bottom: 40,
    },
    userInformation: {
        alignItems: 'center'
    },
    userPic: {
        width: 85,
        height: 85,
        borderRadius: 100
    },
    username: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 20,
    },
    tagContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    tag: {
        marginHorizontal: 10,
        fontSize: 15
    },
    itinenaryDescription: {
        marginTop: 25,
        fontFamily: 'Nunito_400Regular',
        textAlign: 'center',
        width: '80%',
        fontSize: 20
    },
    itineraryData: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    priceContainer: {
        flexDirection: 'row',
    },
    price: {
        fontSize: 17,
        marginRight: 5
    },
    iconContainer: {
        flexDirection: 'row'
    },
    icon: {
        width: 25,
        height: 25
    },
    durationContainer: {
        flexDirection: 'row'
    },
    button62: {
        backgroundColor: '#df5e5e',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#8f3b3b',
        marginTop: 30
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Nunito_900Black'
    },
    titleMain: {
        color: '#444',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 30,
        borderBottomWidth: 2,
        borderBottomColor: '#df5e5e',
        marginHorizontal: 50,
        fontFamily: 'Nunito_900Black'
    },
})