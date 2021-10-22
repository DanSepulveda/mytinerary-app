import React, { useEffect, useState, useRef } from "react"
import { connect } from "react-redux"
import commentsActions from "../redux/actions/commentsActions"
import Comment from "./Comment"
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, TextInput, Dimensions, ToastAndroid } from "react-native"

const Chat = (props) => {
    const { comments } = props
    const [uploadedComments, setUploadedComments] = useState([])
    const [commentToPost, setCommentToPost] = useState("")
    const commentInput = useRef()
    const [render, setRender] = useState(false)

    useEffect(() => {
        setUploadedComments(comments)
    }, [])

    const inputHandler = (value) => {
        setCommentToPost(value)
    }

    const postComment = async () => {
        if (props.token) {
            try {
                let response = await props.addComment(commentToPost, props.itineraryId, props.token)
                setUploadedComments(response.comments.comments.reverse())
                commentInput.current.value = ('')
            } catch (e) {
                console.log(e)
            }
        } else {
            ToastAndroid.showWithGravity('Please Log In to post a comment.', ToastAndroid.LONG, ToastAndroid.BOTTOM)
        }
    }

    let inputMessage = props.token ? 'Write your comment and send it!' : 'You must to be logged in to post a comment.'

    if (!uploadedComments) {
        <View style={styles.commentBox}>
            <TextInput ref={commentInput} placeholder={inputMessage} style={styles.searcher} onChange={inputHandler} editable={props.token ? true : false} />
            <TouchableOpacity onPress={postComment} style={styles.sendButton}>
                <Image style={styles.arrowIcon} source={{ uri: 'https://mytinerary-dansep.herokuapp.com/assets/arrow.png' }} />
            </TouchableOpacity>
        </View>
    }

    return (
        <View style={styles.chatBox}>
            <ScrollView style={styles.comments}>
                {uploadedComments.map((comment, index) => {
                    return (
                        <Comment render={render} comment={comment} key={index} itineraryId={props.itineraryId} />
                    )
                })}
            </ScrollView>
            <View style={styles.commentBox}>
                <TextInput ref={commentInput} placeholder={inputMessage} style={styles.searcher} onChange={(e) => inputHandler(e.nativeEvent.text)} editable={props.token ? true : false} />
                <TouchableOpacity onPress={postComment} style={styles.sendButton}>
                    <Image style={styles.arrowIcon} source={{ uri: 'https://mytinerary-dansep.herokuapp.com/assets/arrow.png' }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token
    }
}

const mapDispatchToProps = {
    addComment: commentsActions.addComment,
    deleteComment: commentsActions.deleteComment,
    editComment: commentsActions.editComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)

const containerHeight = Dimensions.get('screen').height * 0.5
const styles = StyleSheet.create({
    chatBox: {
        height: containerHeight,
        width: '100%',
    },
    comments: {
        flex: 1
    },
    commentBox: {
        height: containerHeight * 0.1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 15
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
        marginRight: 10
    },
    sendButton: {
        width: 35,
        height: 35
    },
    arrowIcon: {
        width: 35,
        height: 35
    }
})