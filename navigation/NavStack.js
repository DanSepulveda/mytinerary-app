import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import City from '../screens/City'
import Login from '../screens/Login'
import Signup from '../screens/Signup'

const Stack = createNativeStackNavigator()


export const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="welcome" component={Home} options={{
                title: 'Welcome to MyTinerary'
            }} />
        </Stack.Navigator>
    )
}

export const CitiesStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="cities" component={Cities} options={{
                title: 'MyTinerary - All Cities'
            }} />
            <Stack.Screen name="city" component={City} options={{
                title: 'MyTinerary - City'
            }} />
        </Stack.Navigator>
    )
}

export const CityStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="city" component={City} options={{
                title: 'MyTinerary - City'
            }} />
        </Stack.Navigator>
    )
}



export const SignUpStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="signup" component={Signup} options={{
                title: 'MyTinerary - SignUp'
            }} />
        </Stack.Navigator>
    )
}

export const LoginStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" component={Login} options={{
                title: 'MyTinerary - Login'
            }} />
        </Stack.Navigator>
    )
}

// const Navigator = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="welcome" component={Home} options={{
//                 title: 'Welcome to MyTinerary'
//             }} />
//             <Stack.Screen name="cities" component={Cities} options={{
//                 title: 'MyTinerary - All Cities'
//             }} />
//             <Stack.Screen name="city" component={City} options={{
//                 title: 'MyTinerary - City'
//             }} />
//         </Stack.Navigator>
//     )
// }
