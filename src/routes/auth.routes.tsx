import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from "../screens/home"
import { SignIn } from "../screens/sign-in"

const { Screen, Navigator } = createNativeStackNavigator()

export function AuthRoutes() {
    return (
        <Navigator>
            <Screen 
                name='sign-in'
                component={SignIn}
                options={{ headerShown: false, contentStyle: { backgroundColor: 'transparent'}}}
                
            />
            <Screen 
                name='home'
                component={Home}
                options={{ headerShown: false, contentStyle: { backgroundColor: 'transparent'}}}
            />  
        </Navigator>        
    )
}