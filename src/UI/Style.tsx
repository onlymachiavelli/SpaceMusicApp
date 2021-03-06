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

    },
    ShowPass: {
        position: "absolute",
        right: 20,
        paddingTop: 10,
        paddingBottom: 10,

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
    root: {
        width: "100%",
        height: "100%",
        backgroundColor: "#141923",
    },

    BlocInp: {
        width: "100%",
        height: "auto",
        alignItems: "center",
        marginTop: 20,
        alignSelf: "center"

    }
})

export const Settings = StyleSheet.create({
    Container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#141923",
    },
    B_button: {
        width: "85%",
        height: 110,
        backgroundColor: "#2F384B",
        alignSelf: "center",
        marginTop: 43,
        borderRadius: 10,
        paddingLeft: 40,
        justifyContent: "center",

    },
    btnTXT: {
        color: "#fff",
        marginLeft: 60,
        marginTop: -5,
        fontSize: 20,
    },
    btnicon: {
        position: "absolute",
        left: 30,
    },
    report_btn: {
        backgroundColor: "#C92B2B",
        borderRadius: 50,
        width: 250,
        height: 70,
        alignSelf: "center",
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    report_btn_txt: {
        color: "#fff",
        fontSize: 20,
    }
    ,
    socialMediacontainer: {

        position: "absolute",
        bottom: 30,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: "auto",
        flexDirection: "row"
    },
    social_btn: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: "#C9872B",
        alignItems: "center",
        justifyContent: "center",
        margin: 5,

    }
})

