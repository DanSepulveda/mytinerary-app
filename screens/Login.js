import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid } from "react-native"
import React, { useState } from "react"
import { connect } from "react-redux"
import usersActions from "../redux/actions/usersActions"

const Login = (props) => {
    const [user, setUser] = useState({})

    const verification = () => {
        if (Object.values(user).includes("") || Object.values(user).length !== 2) {
            ToastAndroid.showWithGravity('All fields are required.', ToastAndroid.LONG, ToastAndroid.BOTTOM)
        } else {
            async function userVerification() {
                try {
                    await props.verifyAccess(user)
                    ToastAndroid.showWithGravity('Logged In Successfully.', ToastAndroid.LONG, ToastAndroid.BOTTOM)
                } catch (e) {
                    ToastAndroid.showWithGravity(e.message, ToastAndroid.LONG, ToastAndroid.BOTTOM)
                }
            }
            userVerification()
        }
    }

    // const logInHandler = async () => {
    //     if (logInUser.email === '' || logInUser.password === '') {
    //         ToastAndroid.showWithGravityAndOffset('⚠️ All fields must be completed', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25,
    //         60)
    //     } else {
    //         try{
    //             let res= await props.signInUser(logInUser)
    //             if(!res.data.success){
    //                 ToastAndroid.showWithGravityAndOffset('⚠️ Invalid password or email', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25,
    //         60)
    //             }else{
    //                 ToastAndroid.showWithGravityAndOffset('Welcome Back 👋! ', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25,
    //                 60)
    //             }
    //         }catch (error){
    //            console.log(error)
    //             return false
    //            }

    //     }       
    // }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>We're glad you are here again! Let's enjoy!</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.searcher} placeholder="Email" onChange={(e) => setUser({ ...user, email: e.nativeEvent.text })} />
                <TextInput style={styles.searcher} secureTextEntry={true} placeholder="Password" onChange={(e) => setUser({ ...user, password: e.nativeEvent.text })} />
                <TouchableOpacity style={styles.button62} activeOpacity={.7} onPress={verification}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Nunito_900Black',
        fontSize: 40,
        marginTop: 160
    },
    subtitle: {
        fontSize: 22,
        marginVertical: 20,
        marginBottom: 50,
        fontFamily: 'Nunito_400Regular',
        textAlign: 'center'
    },
    inputContainer: {
        width: '100%'
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
        marginRight: 10,
        marginBottom: 20
    },
    deco: {
        marginTop: -8,
        marginLeft: 14,
        alignSelf: "flex-start",
        backgroundColor: "#3fced3",
        width: 80,
        height: 10,
    },

    inputConteiner: {
        alignItems: "center"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        marginTop: 15,
        backgroundColor: 'black',
        width: 150,
        height: 50,
        zIndex: 1
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    signInText: {
        padding: 8,
        fontSize: 17,
        fontFamily: "Ubuntu_700Bold",
        color: "gray",
        textAlign: "center"
    },
    textCont: {
        marginVertical: 10
    },
    buttonSignIn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "70%",
        height: 40,
        zIndex: 1,
    },
    textSignIn: {
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 0.2,
        color: 'grey'
    },
    button62: {
        backgroundColor: '#df5e5e',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#8f3b3b',
        marginTop: 30,
        width: '50%',
        alignSelf: 'center',
        marginBottom: 30
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Nunito_900Black',
        textAlign: 'center'
    },


})
const mapStateToProps = (state) => {
    return {
        firstName: state.users.firstName,
    }
}

const mapDispatchToProps = {
    verifyAccess: usersActions.verifyAccess
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)