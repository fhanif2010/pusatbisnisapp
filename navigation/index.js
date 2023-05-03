import React from "react";
import Login from "../page/login/index.js";
import Home from "../page/home/index.js";
import CallApiAxios from '../callapiaxios/index.js';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Login" component={Login}
                    options={{ headerShown: false }} 
                />
                <Stack.Screen name="Home" component={Home}
                    options={{ headerShown: false }} 
                />
                <Stack.Screen name="CallApiAxios" component={CallApiAxios}
                    options={{ headerShown: false }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;