import React, { useEffect } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { CitiesStack, HomeStack, LoginStack, SignUpStack } from './NavStack'
import { StyleSheet, Text, View, Image, ImageBackground, ToastAndroid } from 'react-native'
import { connect } from 'react-redux'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import userActions from '../redux/actions/usersActions'
const drawer = createDrawerNavigator()

const Navigator = (props) => {
    // const { signOutUser, token, firstName, profilePhoto } = props
    // console.log(props)
    // useEffect(() => {
    //     const asyncStore = async () => {
    //         let insideStorage = await AsyncStorage.getItem("token")
    //         if (insideStorage) {
    //             const storage = await AsyncStorage.getItem("token")
    //             return await props.signInLS(storage)
    //         }
    //     }
    //     asyncStore()
    // }, [])

    // function LogoTitle() {
    //     return (
    //         <Image
    //             style={{ width: 80, height: 80, resizeMode: 'contain' }}
    //             source={require('../assets/logo2.png')}
    //         />
    //     )
    // }

    const CustomDrawerContent = (props) => {
        return (
            <ImageBackground source={require('../assets/wallpaper.jpeg')} style={styles.drawerCustom} resizeMode='cover'>
                <DrawerContentScrollView {...props}>
                    <View style={styles.userPicture}>
                        {!props.token
                            ? <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://mytinerary-dansep.herokuapp.com/assets/avatar.png' }} />
                            : <Image style={styles.userProfile} source={{ uri: props.userPicture }} />}
                        {props.token
                            && <Text style={styles.nameUser}>Welcome, {firstName}</Text>
                        }
                    </View>
                    <DrawerItemList {...props} />
                    {props.token && <DrawerItem label="Sign Out" onPress={() => { logOut(); props.navigation.navigate('Home') }} />}
                </DrawerContentScrollView>
            </ImageBackground>
        )
    }

    return (

        <drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <drawer.Screen name="Home" component={HomeStack} />
            <drawer.Screen name="Cities" component={CitiesStack} />
            {!props.token && <drawer.Screen name="Log In" component={LoginStack} />}
            {!props.token && <drawer.Screen name="Sign Up" component={SignUpStack} />}
        </drawer.Navigator>

    )
}

const styles = StyleSheet.create({
    nameUser: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20
    },
    userPicture: {
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 50
    },
    drawerCustom: {
        flex: 1,
        marginTop: 15,
    },
    userProfile: {
        minWidth: 55,
        height: 57,
        borderRadius: 50
    }


})

const mapStateToProps = (state) => {
    return {
        token: state.users.token,
        firstName: state.users.user.firstName,
        userPicture: state.users.user.imageUrl
    }
}

const mapDispatchToProps = {
    signInLS: userActions.logInLS,
    logOut: userActions.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigator)
