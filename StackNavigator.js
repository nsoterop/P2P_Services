import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuth from './hooks/useAuth';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const {user} = useAuth()
    
  return (
    <Stack.Navigator>
        { user ? (
            <>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }}/>
            </>
        ) : (
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
        )}
    </Stack.Navigator>
  )
}

export default StackNavigator