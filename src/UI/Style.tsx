import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

export const LogingStyle = StyleSheet.create({
    root: {
        width: Width,
        height: Height,
        backgroundColor: "#141923",
    },
    logo: {
        width: "100%",
        height: "auto",
        alignItems: "center"

    },
    BlocInp: {
        width: "100%",
        height: "auto",
        alignItems: "center"

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
    },
    Label: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 23,
        marginLeft: 40,
    },
    InputContaine: {
        backgroundColor: "#2F384B",
        width: "90%",
        height: 60,
        paddingLeft: 20,
        justifyContent: "center"
    },
    Input: {

    },
    inpl: {

    }

})