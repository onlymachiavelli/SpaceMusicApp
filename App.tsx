import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Login from './pages/login/login'
import SignUp from './pages/signup/signup'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Recover from './pages/recover/recover'
const Stack = createStackNavigator()
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={Login} options={{
          title: "Login",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#141923",
          }
        }} />
        <Stack.Screen options={{
          title: "SignUp",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#141923",
          }
        }} name="SignUp" component={SignUp} />
        <Stack.Screen options={{
          title: "Recover Password",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#141923",
          }
        }} name="Recover" component={Recover} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
})