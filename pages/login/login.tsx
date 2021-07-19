import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { Settings, Lock, MainLogo, RegularUser } from './../../packs/svg'
import Language from './../../packs/languages'
import SignUp from './../signup/signup'
import Recover from './../recover/recover'
let Len = Language.English

const Login = ({ navigation }) => {

    return (
        <View style={Loginstyle.root}>
            <TouchableOpacity style={{ marginLeft: 20, marginTop: 10, }}>
                <Settings />
                <Text style={Loginstyle.setTXT}>
                    {Len.settings}
                </Text>
            </TouchableOpacity>

            <View style={Loginstyle.container}>
                <MainLogo />
                <Text style={
                    {
                        color: "#fff",
                        fontSize: 24,
                        fontWeight: "bold",
                        alignSelf: "flex-start",
                        marginLeft: 30,
                        marginBottom: 20,
                    }
                }>
                    {Len.signin}
                </Text>


                <View style={Loginstyle.input}>

                    <View style={Loginstyle.inplogo}>
                        <RegularUser />
                        <TextInput
                            style={Loginstyle.inputText}
                            placeholder={Len.username}
                            placeholderTextColor="#fff"
                        ></TextInput>
                    </View>

                </View>

                <View style={Loginstyle.input}>

                    <View style={Loginstyle.inplogo}>
                        <Lock />
                        <TextInput
                            style={Loginstyle.inputText}
                            placeholder={Len.password}
                            placeholderTextColor="#fff"
                            secureTextEntry={true}
                        ></TextInput>
                    </View>

                </View>

                <TouchableOpacity>
                    <View style={Loginstyle.button}>
                        <Text style={Loginstyle.buttontext}>
                            {Len.login}
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigation.navigate(Recover)
                }}>
                    <Text style={{
                        color: "#fff",
                        fontSize: 17,
                        marginTop: 20,
                    }}>
                        {Len.forgot}
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ zIndex: 1 }} onPress={() => {
                navigation.navigate(SignUp)
            }}>
                <View style={Loginstyle.downbtn}>
                    <Text style={{
                        color: "#fff",
                        fontSize: 19,
                    }}>
                        {Len.signup}
                    </Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}
export default Login
const Loginstyle = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        backgroundColor: "#141923"
    },
    setTXT: {
        color: "#fff",
        marginLeft: 20,
        marginTop: -16,
    },
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        marginTop: "-17%",
        zIndex: 2,
        position: "relative",
        overflow: "scroll",
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
        position: "relative",
        width: "100%",
        height: 55,
        backgroundColor: "#C9872B",
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",

    }
})