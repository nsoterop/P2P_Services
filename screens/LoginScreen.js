import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'

const LoginScreen = () => {
    const { signInWithGoogle } = useAuth()

  return (
    <SafeAreaView>
      <Text>LoginScreen</Text>
      <Button title='login' onPress={signInWithGoogle} />
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})