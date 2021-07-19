import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Language from './../../packs/languages'
import { Settings, Lock, MainLogo, RegularUser, Email } from './../../packs/svg'
import Login from './../login/login'
let Len = Language.English
const Receive = ({ navigation }) => {
    return (
        <View style={RecoverStyle.root}>
            <TouchableOpacity style={{ marginLeft: 20, marginTop: 10, }}>
                <Settings />
                <Text style={RecoverStyle.setTXT}>
                    {Len.settings}
                </Text>
            </TouchableOpacity>

            <Text style={
                {
                    color: "#fff",
                    fontSize: 24,
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                    marginLeft: 30,
                    marginBottom: 20,
                    marginTop: 30,
                }
            }>
                {Len.forgot}
            </Text>

            <View style={
                {
                    width: "100%",
                    height: "auto",
                    alignItems: "center"
                }
            }>
                <View style={RecoverStyle.input}>
                    <View style={RecoverStyle.inplogo}>
                        <Email />
                        <TextInput
                            style={RecoverStyle.inputText}
                            placeholder={Len.email}
                            placeholderTextColor="#fff">
                        </TextInput>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={RecoverStyle.button}>
                        <Text style={RecoverStyle.buttontext}>
                            {Len.submit}
                        </Text>
                    </View>
                </TouchableOpacity>


            </View>
            <View style={{
                width: "100%",
                height: "auto",
                position: "absolute",
                bottom: 0,
            }}>
                <TouchableOpacity style={{ zIndex: 1 }} onPress={() => {
                    navigation.navigate(Login)
                }}>
                    <View style={RecoverStyle.downbtn}>
                        <Text style={{
                            color: "#fff",
                            fontSize: 19,
                        }}>
                            {Len.signin}
                        </Text>
                    </View>

                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Receive
const RecoverStyle = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        backgroundColor: "#141923",
    }, setTXT: {
        color: "#fff",
        marginLeft: 20,
        marginTop: -16,
    },
    input: {
        width: "90%",
        height: 57,
        backgroundColor: "#2F384B",
        borderRadius: 30,
        marginTop: 20,
    },
    inplogo: {
        marginTop: 16,
        marginLeft: 20,
    },
    inputText: {
        color: "#fff",
        width: "80%",
        height: 40,
        marginTop: -31,
        marginLeft: 35,
    },
    button: {
        backgroundColor: "#C9872B",
        width: 270,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        marginTop: 40,

    },
    buttontext: {
        color: "#fff",
        fontSize: 20,
    },
    downbtn: {
        width: "100%",
        height: 55,
        backgroundColor: "#C9872B",
        alignItems: "center",
        justifyContent: "center",

    }
})