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

export const SettS = StyleSheet.create({
    st: {
        width: "100%",
        height: "auto",
        paddingLeft: 20,
        marginTop: 20
    },
    txt: {
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 25,
        marginTop: -16,

    },
})

export const common = StyleSheet.create({
    Full: {
        width: "100%",
        height: "100%",
    }
})