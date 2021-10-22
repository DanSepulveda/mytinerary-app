import React from "react"
import { connect } from "react-redux"
import { ImageBackground, StyleSheet, Text } from "react-native"
// let moment = require('moment')
import { View } from "react-native"

const Comments = (props) => {
    return (
        <View style={styles.singleComment}>
            <ImageBackground style={styles.userPicture} source={{ uri: `${props.comment.userId.imageUrl}` }}>

            </ImageBackground>
            <View style={styles.commentInfo}>
                <Text style={styles.username}>{`${props.comment.userId.firstName}  ${props.comment.userId.lastName[0]}.`}</Text>
                <Text style={styles.input}>{props.comment.comment}</Text>
                {/* <span className={styles.date}>{moment(props.comment.date).fromNow()}</span> */}
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token,
        id: state.users.id
    }
}

export default connect(mapStateToProps)(Comments)

const styles = StyleSheet.create({
    singleComment: {
        flexDirection: 'row',
        marginBottom: 10
    },
    userPicture: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginLeft: 15,
        marginRight: 10
    },
    commentInfo: {

    },
    username: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 20
    },
    input: {
        fontSize: 15,
        fontFamily: 'Nunito_400Regular',
        width: '97%'
    },
    whiteInput: {

    }
})