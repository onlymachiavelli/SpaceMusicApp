import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Login from './pages/login/login'
import SignUp from './pages/signup/signup'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator   >
        <Stack.Screen name="Login" component={Login} options={{
          title:"Login",
          headerTintColor : "#fff",
          headerStyle:{
            backgroundColor:"#141923",
          }
        }} />
        <Stack.Screen options={{
          title:"Login",
          headerTintColor : "#fff",
          headerStyle:{
            backgroundColor:"#141923",
          }
        }}  name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    width:"100%", 
    height:"100%",
  },
})