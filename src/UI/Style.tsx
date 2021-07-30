import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

export const LogingStyle = StyleSheet.create({
    root: {
        width: Width,
        height: Height,
        backgroundColor: "#141923",
    }
})