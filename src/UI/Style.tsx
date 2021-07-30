import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

export const LogingStyle = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
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
        alignItems: "center",
        marginTop: 20,

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
        width: Width,
        height: Height,
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
        justifyContent: "center",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#C9872B",
        marginTop: 20,

    },
    Input: {
        width: "83%",
        marginLeft: 60,
        height: "80%",
        fontWeight: "bold",
        position: "absolute",
        color: "#fff",

    },
    inpl: {
        position: "absolute",
        marginLeft: 20,
    },
    Subbtn: {
        width: 200,
        height: 60,
        backgroundColor: "#C9872B",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        borderRadius: 50
    },
    Stext: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "900"
    },

    Bottom: {
        width: "100%",
        height: 60,
        backgroundColor: "#C9872B",
        position: "absolute",
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        borderTopWidth: 2,
        borderTopColor: "#fff",

    }
})

export const signin = StyleSheet.create({

})