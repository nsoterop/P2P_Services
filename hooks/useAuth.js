import { Text, View } from 'react-native'
import React, { createContext, useContext } from 'react'
import * as Google from "expo-google-app-auth"
import { ANDROID_CLIENT_ID }  from "@env"
import { IOS_CLIENT_ID }  from "@env"

const AuthContext = createContext({})

const config = {
  androidClientId: ANDROID_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID,
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"]
}

export const AuthProvider = ({children}) => {

  const signInWithGoogle = async() => {
      Google.logInAsync(config).then(async (logInResult) => {
        if(logInResult.type === 'success') {

        }
      })
  }

  return (
    <AuthContext.Provider 
      value={{
        user: null,
        signInWithGoogle
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
    return useContext(AuthContext);
}